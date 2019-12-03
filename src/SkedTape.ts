import clone from 'lodash/clone';
import cloneDeep from 'lodash/cloneDeep';
import omit from 'lodash/omit';
import {
  addClass,
  ceilHours,
  closest,
  countRangesIntersections,
  eventFromSkedEvent,
  floorHours,
  gapBetween,
  getDurationHours,
  getElementOffset,
  getMidnightAfter,
  getMidnightBefore,
  getMsFromMidnight,
  getMsToMidnight,
  MS_PER_DAY,
  MS_PER_HOUR,
  MS_PER_MINUTE,
  Range,
  rangesIntersection,
  removeClass,
  SHORT_DURATION,
} from './helpers';
import SkedEventCollisionError from './SkedEventCollisionError';
import SmoothScroller from './SmoothScroller';
import VNode, { VNodeChild, VNodeProps } from './VNode';
import VTree from './VTree';

const CURRENT_TZ_OFFSET = new Date().getTimezoneOffset();

function createElement(tagName: string, props?: VNodeProps, children?: VNodeChild) {
  return new VNode(tagName, props, children);
}

export type CreateElementFn = typeof createElement;

export interface PointData {
  locationId: number;
  date: Date;
}

export interface SkedLocation {
  id: number;
  name: string;
  order?: number;
  tzOffset?: number;
  userData?: {
    [key: string]: any;
  };
}

export interface SkedEvent {
  id: number;
  name: string;
  locationId: number;
  start: Date;
  end: Date;
  data: {
    [key: string]: string;
  };
  url?: string;
  className?: string;
  disabled: boolean;
  active: boolean;
  userData: {
    [key: string]: any;
  };
}

export type SkedEventInput = Partial<
  Omit<SkedEvent, 'name' | 'locationId' | 'start' | 'end'>
> & Pick<SkedEvent, 'name' | 'locationId' | 'start' | 'end'>;

export type SkedDraggedEvent = Omit<SkedEventInput, 'start' | 'end' | 'locationId'> & {
  duration: number,
};

interface SkedIntersection extends Range<Date> {
  events: SkedEvent[];
}

export interface DummyEvent {
  draggedEvent: SkedEventInput;
  duration: number;
  end?: Date;
  locationId?: number;
  name: string;
  start?: Date;
  takenFromTimeline: boolean;
}

export interface SkedFormatters {
  date(date: Date, endian?: 'm' | 'l', delim?: string): string;
  roundDuration(ms: number): number;
  duration(ms: number, opts?: Partial<{ hrs: string, min: string }>): string;
  hours(hours: number): string;
  time(date: Date): string;
}

const DefaultFormatters: SkedFormatters = {
  /**
   * Formats the date.
   *
   * Note, since the component itself invokes the function with a single
   * argument, when overriding the function you should provide only the first
   * one. The sole purpose of the rest of them is to be used from the derived
   * function for convenience.
   *
   * @param {Date} date The date to format.
   * @param {'m'|'l'} endian Date format endianess ('m' - US, 'l' - EU).
   *                         Default value is 'm'.
   * @param {String} delim Date component delimiter.
   *                       Default - '/' or '.' depending on `endian`'s value.
   */
  date(date: Date, endian: 'm' | 'l' = 'm', delim?: string): string {
    delim = delim || (endian === 'm' ? '/' : '.');
    let nums = [date.getDate(), date.getMonth() + 1, date.getFullYear()];
    if (endian === 'm') {
      nums = [nums[1], nums[0], nums[2]];
    }
    return nums.join(delim);
  },

  roundDuration(ms: number): number {
    return ms;
  },

  duration(ms: number, opts?: Partial<{ hrs: string, min: string }>): string {
    const h = Math.floor(ms / MS_PER_HOUR);
    const m = Math.floor((ms % MS_PER_HOUR) / MS_PER_MINUTE);
    const hrs = (opts && opts.hrs) || (h > 1 ? 'hrs' : 'hr');
    const min = (opts && opts.min) || (m > 1 ? 'mins' : 'min');
    let format = h ? h + hrs : '';
    format += h && m ? ' ' : '';
    format += m ? m + min : '';
    return format;
  },

  hours(hours: number): string {
    return (hours < 10 ? '0' : '') + hours + ':00';
  },

  time(date: Date): string {
    const h = date.getHours();
    const m = date.getMinutes();
    return (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m);
  },
};

/**
 * Describes SkedTape's constructor parameters.
 */
export interface SkedTapeCtorOptions {
  el: HTMLElement;
  formatters?: SkedFormatters;
  start: Date;
  end: Date;
  /// Initial zoom level.
  zoom?: number;
  minZoom?: number;
  maxZoom?: number;
  /// Default zooming up and down increment/decrement value.
  zoomStep?: number;
  /// Whether to show from-to dates in events.
  showEventTime?: boolean;
  /// Whether to show duration in events.
  showEventDuration?: boolean;
  /// Whether to show dates bar.
  showDates?: boolean;
  /// Minimum time between events required for the user to be able to add an event.
  minIntervalBetween?: number;
  /// Minimum gap between events to show minutes.
  minTimeGapShown?: number;
  /// Maximum gap between events to show minutes.
  maxTimeGapShown?: number;
  /// Minimum gap to DO NOT highlight adjacent events.
  tooSmallInterval?: number | false;
  /// Enables horizontal timeline scrolling with vertical mouse wheel.
  scrollWithYWheel?: boolean;
  /// Enables sorting of locations.
  sorting?: boolean;
  /// Specifies sorting columns. The property accepts two possible values:
  /// 'order' (sorting by the property 'order' provided in location objects)
  /// or 'name' (locale-aware case insensitive comparison by name).
  orderBy?: 'order' | 'name';
  /// The number of minutes the dummy event will be snapped to. To
  /// disable snapping set any falsy value.
  snapToMins?: number;
  /// Whether the Right Mouse Button cancels dragging an event.
  rmbCancelsDrag?: boolean;
  /// Default timezone for locations, takes effect when you don't specify it
  /// in location descriptor. The default value is a browser's current timezone.
  tzOffset?: number;
  /// Enables or disables showing serifs on time indicator lines.
  timeIndicatorSerifs?: boolean;
  /// Enables or disables showing intervals between the event dragged and the
  /// other ones on the left and right.
  showIntermission?: boolean;
  /// Interval (in minutes) between events to show intermission time when it is
  /// enabled.
  intermissionRange?: [number, number];
  /// Turns on drag and drop events.
  dndEnabled?: boolean;
  /// The hook invoked to determine whether an event may be added to a location.
  /// The default implementation always returns *true*.
  /// You should avoid mutating the arguments in this hook (that may cause
  /// unexpected behaviour).
  canAddIntoLocation?: (location: SkedLocation, event: DummyEvent) => boolean;
  /// Invoked after getting a positive result from the `canAddIntoLocation()`
  /// hook just before updating the event. Here you can place any logic that
  /// mutates the event object given.
  beforeAddIntoLocation?: (location: SkedLocation, event: DummyEvent) => void;
  /// The callback that returns additional classe names to the location VNode.
  /// The function is called whenever a location VNode is rendered.
  locationClasses?: (location: SkedLocation, canAdd: boolean) => string | string[];
  /// The function that returns virtual subnodes of a schedule location.
  /// When provided it supresses the default implementation, so you'll be
  /// responsible for rendering the *whole* content of the location's virtual
  /// node. The first argument given is a schedule location's model which a bit
  /// different from that you fed the plugin with. The last argument is the
  /// function that you should use to create subnodes (see the notes about VDOM
  /// above). The returned value of the function will be passed to the third
  /// argument of the inner createElement function which renders the main
  /// container's VNode of the location. That means you are able to return some
  /// text, a VNode or an array of VNode's. For better insight how to use it
  /// there is an example in DEMO.
  renderLocationContent?: (
    location: SkedLocation,
    createElement: CreateElementFn,
  ) => VNodeChild;
  /// The function that returns virtual subnodes of a schedule event.
  /// When provided it supresses the default implementation, so you'll be
  /// responsible for rendering the *whole* content of an event. The first
  /// argument given is a schedule event's model which a bit different from
  /// that you fed the plugin with. The last argument is the function that you
  /// should use to create subnodes (see the notes about VDOM above). The
  /// returned value of the function will be passed to the third argument of the
  /// inner createElement function which renders the main container's VNode of
  /// the event. That means you are able to return some text, a VNode or an
  /// array of VNode's. For better insight how to use it there is an example in
  /// DEMO.
  renderEventContent?: (
    event: SkedEvent,
    createElement: CreateElementFn,
  ) => VNodeChild;
  /// Fires when the user clicks on an event element.
  onEventClick?: (event: SkedEvent, mouseEvent: MouseEvent) => void;
  /// Fires when the user click on an event element with right mouse button.
  onEventMenu?: (event: SkedEvent, mouseEvent: MouseEvent) => void;
  /// Fires before some event starts being dragged. Returning a falsy value
  /// prevents the event from being dragged.
  onEventBeforeDrag?: (event: SkedEvent) => boolean;
  /// Fires when the event starts being dragged just after `onEventBeforeDrag()`.
  onEventDrag?: (event: SkedEvent) => void;
  /// Fires whenever an event stops being dragged either for RMB click or
  /// programmatically call of `cancelEventDrag()`. The sole argument refers
  /// the event of timeline being dragged, which may be null (in case the drag
  /// was started with dragNewEvent()).
  onEventDragCancel?: (event: SkedEventInput) => void;
  /// Fires when the user tries to drop the event dragged into the incorrect
  /// position occupied by some other event yet.
  onEventDropRefusal?: (event: DummyEvent) => void;
  /// Fires just before `onEventDrop()` and may prevent the action by returning
  /// falsy value.
  onEventBeforeDrop?: (event: DummyEvent) => boolean;
  /// Fires when the user clicks on the appropriate place on the timeline for
  /// the event dragged to being dropped.
  onEventDrop?: (event: SkedEvent) => void;
  /// Fires when the user clicks on a DOM element being rendered to outline
  /// intersection of events.
  onIntersectionClick: (
    events: SkedEvent[],
    pointData: PointData,
    mouseEvent: MouseEvent,
  ) => void;
  /// Fires when the user clicks with right mouse button on a DOM element being
  /// rendered to outline intersection of events.
  onIntersectionMenu: (
    events: SkedEvent[],
    pointData: PointData,
    mouseEvent: MouseEvent,
  ) => void;
  /// Fires when the user clicks on a non-occupied point of the timeline.
  onTimelineClick: (event: MouseEvent, pointData: PointData) => void;
  /// Fires when the user clicks on a non-occupied point of the timeline with RMB.
  onTimelineMenu: (event: MouseEvent, pointData: PointData) => void;
}

/**
 * Schedule tape widget.
 */
export default class SkedTape extends VTree {
  public static format = DefaultFormatters;
  private caption = '';
  private locations: SkedLocation[] = [];
  private events: SkedEvent[] = [];
  private format: SkedFormatters = DefaultFormatters;
  private dndEnabled = false;
  private dummyEvent: DummyEvent = null;
  private start: Date;
  private end: Date;
  private zoom = 1;
  private minZoom = 0.5;
  private maxZoom = 10;
  private zoomStep = 0.5;
  private baseHourWidth = 96;
  private showEventTime = false;
  private showEventDuration = false;
  private showDates = true;
  private minIntervalBetween = 0;
  private minTimeGapShown = 1 * MS_PER_MINUTE;
  private maxTimeGapShown = 60 * MS_PER_MINUTE - 1;
  private tooSmallInterval: number | false = false;
  private scrollWithYWheel = false;
  private sorting = false;
  private orderBy: 'order' | 'name' = 'order';
  private snapToMins = 1;
  private rmbCancelsDrag = true;
  private tzOffset = CURRENT_TZ_OFFSET;
  private timeIndicatorSerifs = false;
  private showIntermission = false;
  private intermissionRange: [number, number] = [1, 60];
  private lastPicked: PointData = null;
  private indicatorTimeout: NodeJS.Timeout;
  private listeners: Array<{ listener: (event: Event) => void, type: string }> = [];
  private canAddIntoLocation: (location: SkedLocation, event: DummyEvent) => true;
  private beforeAddIntoLocation: (location: SkedLocation, event: DummyEvent) => void;
  private onEventClick: (event: SkedEvent, mouseEvent: MouseEvent) => void;
  private onEventMenu: (event: SkedEvent, mouseEvent: MouseEvent) => void;
  private onEventBeforeDrag: (event: SkedEvent) => boolean;
  private onEventDrag: (event: SkedEvent) => void;
  private onEventDragCancel: (event: SkedEventInput) => void;
  private onEventDropRefusal: (event: DummyEvent) => void;
  private onEventBeforeDrop: (event: DummyEvent) => boolean;
  private onEventDrop: (event: SkedEvent) => void;
  private onIntersectionClick: (
    events: SkedEvent[],
    pointData: PointData,
    mouseEvent: MouseEvent,
  ) => void;
  private onIntersectionMenu: (
    events: SkedEvent[],
    pointData: PointData,
    mouseEvent: MouseEvent,
  ) => void;
  private onTimelineClick: (event: MouseEvent, pointData: PointData) => void;
  private onTimelineMenu: (event: MouseEvent, pointData: PointData) => void;
  private smoothScroller: SmoothScroller;
  private animFrameId: any;

  constructor(opts: Partial<SkedTapeCtorOptions>) {
    super(opts.el);

    Object.assign(this, opts);
    if (opts.formatters) {
      this.format = { ...DefaultFormatters, ...opts.formatters };
    }
    this.registerEventHandlers();
  }

  public destroy() {
    this.cleanup();
    this.root.innerHTML = '';
    removeClass(this.root, 'sked-tape sked-tape--has-dates');
  }

  /**
   * Returns whether Drag and Drop events enabled.
   */
  public get isDnDEnabled() {
    return this.dndEnabled;
  }

  /**
   * Turns on/off Drag and Drop for events.
   */
  public enableDnD(on: boolean = true) {
    if (on !== this.dndEnabled) {
      if (on) {
        this.dndEnabled = true;
      } else {
        if (this.dummyEvent) {
          this.cancelEventDrag();
        }
        this.dndEnabled = false;
      }
    }
  }

  public setTimespan(start: Date, end: Date, { rerender = true } = {}) {
    if (start > end) {
      throw new Error('Invalid time range: ' + JSON.stringify([start, end]));
    }
    this.start = floorHours(start);
    this.end = ceilHours(end);
    if (rerender) {
      this.scheduleRerender();
    }
  }

  /**
   * A shorthand for `setTimespan()` that sets timespan between some
   * specified hours (optional) of a particular date.
   */
  public setDate(
    date: Date,
    minHours: number = 0,
    maxHours: number = 24,
    opts?: { rerender?: boolean },
  ) {
    const midnight = new Date(date);
    midnight.setHours(0, 0, 0, 0);
    const start = new Date(midnight);
    start.setHours(minHours);
    let end;
    if (maxHours && maxHours !== 24) {
      end = new Date(midnight.getTime());
      end.setHours(maxHours);
    } else {
      end = new Date(midnight.getTime() + MS_PER_DAY);
    }
    this.setTimespan(start, end, opts);
  }

  public getZoom() {
    return this.zoom;
  }

  public setZoom(zoom: number) {
    this.zoom = Math.max(Math.min(zoom, this.maxZoom), this.minZoom);
    (this.refs.canvas as HTMLElement).style.width = this.computeCanvasWidth() + 'px';
    (zoom >= 1 ? removeClass : addClass)(this.root, 'sked-tape--condensed');
  }

  public resetZoom() {
    this.setZoom(1);
  }

  public zoomIn(inc?: number) {
    this.setZoom(this.zoom + (inc || this.zoomStep));
  }

  public zoomOut(dec?: number) {
    this.setZoom(this.zoom - (dec || this.zoomStep));
  }

  public locationExists(id: number): boolean {
    return !!this.locations.find(location => location.id === id);
  }

  public setLocations(locations: SkedLocation[], { rerender = true } = {}) {
    const locationIds = locations.map(location => location.id);
    const deletedLocationIds = this.locations
      .map(location => location.id)
      .filter(id => locationIds.indexOf(id) < 0);
    this.locations = [];
    for (const location of locations) {
      this.addLocation(location, { rerender: false });
    }
    this.events = this.events
      .filter(event => deletedLocationIds.indexOf(event.locationId) >= 0);
    if (rerender) {
      this.scheduleRerender();
    }
  }

  public addLocation(location: SkedLocation, { rerender = true } = {}) {
    this.locations.push({
      id: location.id,
      name: location.name,
      order: location.order || 0,
      tzOffset: location.tzOffset,
      userData: location.userData ? { ...location.userData } : {},
    });
    if (rerender) {
      this.scheduleRerender();
    }
  }

  public removeLocation(id: number, { rerender = true } = {}) {
    const index = this.locations.findIndex(location => location.id === id);
    if (index < 0) {
      throw new Error(`Cannot find location #${id}`);
    }
    this.locations.splice(index, 1);
    if (rerender) {
      this.scheduleRerender();
    }
  }

  public getLocation(id: number) {
    return this.locations.find(location => location.id === id);
  }

  public getLocations() {
    if (this.sorting && this.orderBy === 'name') {
      return this.locations.sort((a, b) => {
        const aName = a.name.toLocaleLowerCase();
        const bName = b.name.toLocaleLowerCase();
        return aName.localeCompare(bName);
      });
    } else if (this.sorting && this.orderBy === 'order') {
      return this.locations.sort((a, b) => a.order - b.order);
    } else {
      return this.locations;
    }
  }

  public collide(event: SkedEvent | DummyEvent): SkedEvent {
    if (event.start && event.end) {
      return this.events.find(iEvent => (
        event.locationId === iEvent.locationId &&
        gapBetween(event as Range<Date>, iEvent) < this.minIntervalBetween
      ));
    }
    return null;
  }

  public putEvent(
    event: SkedEventInput,
    { mayIntersect = false, rerender = true } = {},
  ) {
    if (!this.locationExists(event.locationId)) {
      throw new Error('Unknown location #' + event.locationId);
    }

    if (event.start > event.end) {
      throw new Error('Invalid time range: ' +
        JSON.stringify([event.start, event.end]));
    }

    const newEvent: SkedEvent = {
      active: event.active || false,
      className: event.className || null,
      data: event.data ? cloneDeep((event as SkedEvent).data) : {},
      disabled: event.disabled || false,
      end: new Date(event.end),
      id: event.id ? event.id : this.uniqId(),
      locationId: event.locationId,
      name: event.name,
      start: new Date(event.start),
      url: event.url || null,
      userData: event.userData ? cloneDeep(event.userData) : {},
    };

    if (!mayIntersect) {
      const collided = this.collide(newEvent);
      if (collided) {
        throw new SkedEventCollisionError(collided.id);
      }
    }

    if (event.id && this.dummyEvent && this.dummyEvent.draggedEvent.id === event.id) {
      this.dummyEvent.draggedEvent = newEvent;
    } else {
      const index = this.events.findIndex(iEvent => iEvent.id === newEvent.id);
      if (index >= 0) {
        this.events[index] = newEvent;
      } else {
        this.events.push(newEvent);
      }
    }

    if (rerender) {
      this.scheduleRerender();
    }

    return newEvent;
  }

  public putEvents(
    events: SkedEvent[],
    opts?: { mayIntersect?: boolean, rerender?: boolean },
  ) {
    for (const event of events) {
      this.putEvent(event, opts);
    }
  }

  public setEvents(
    events: SkedEvent[],
    opts?: { mayIntersect?: boolean, rerender?: boolean },
  ) {
    this.events = [];
    this.putEvents(events, opts);
  }

  public removeEvent(eventId: number, { rerender = true } = {}): boolean {
    const index = this.events.findIndex(event => event.id === eventId);
    if (index >= 0) {
      this.events.splice(index, 1);
      if (rerender) {
        this.scheduleRerender();
      }
      return true;
    }
    return false;
  }

  public getEvents(): SkedEvent[] {
    return this.events;
  }

  public getEvent(id: number): SkedEvent {
    return this.events.find(event => event.id === id);
  }

  /**
   * Returns event intersection list for a specified location.
   */
  public getIntersections(locationId: number): SkedIntersection[] {
    const intersections: SkedIntersection[] = [];
    const occupied = (intersection: SkedIntersection) => {
      for (const iIntersection of intersections) {
        if (
          intersection.start.getTime() === iIntersection.start.getTime() &&
          intersection.end.getTime() === iIntersection.end.getTime()
        ) {
          return true;
        }
      }
      return false;
    };
    for (let i = 0; i < this.events.length; i++) {
      const iEvent = this.events[i];
      if (iEvent.locationId === locationId) {
        for (let j = i + 1; j < this.events.length; ++j) {
          const jEvent = this.events[j];
          if (jEvent.locationId === locationId) {
            const intersection = rangesIntersection(iEvent, jEvent) as SkedIntersection;
            if (intersection && !occupied(intersection)) {
              // Intersection found and the exact time
              // is unique (for rendering optimization purposes)
              intersection.events = [iEvent, jEvent];
              intersections.push(intersection);
            }
          }
        }
      }
    }
    return intersections;
  }

  public dragEvent(eventId: number) {
    // Cancel dragging the event is being dragged right now
    if (this.isDraggingEvent()) {
      this.cancelEventDrag();
    }
    const event = this.getEvent(eventId);
    // Make sure the event is allowed to be draggable
    if (!this.onEventBeforeDrag || this.onEventBeforeDrag(event)) {
      if (this.onEventDrag) {
        this.onEventDrag(event);
      }
      this.removeEvent(eventId, { rerender: false }); // Remove it from the data
      // Rerender the row
      const location = this.getLocation(event.locationId);
      const events = this.filterLocationEvents(location.id);
      this.materializePartial(this.renderEventRow(location, events));

      this.dragDummyEvent({
        draggedEvent: event,
        duration: event.end.getTime() - event.start.getTime(),
        end: clone(event.end),
        name: event.name,
        start: clone(event.start),
        takenFromTimeline: true,
      });
    }
  }

  public dragNewEvent(event: SkedDraggedEvent) {
    // Cancel dragging the event is being dragged right now
    if (this.isDraggingEvent()) {
      this.cancelEventDrag();
    }
    this.dragDummyEvent({
      draggedEvent: {
        ...omit(event, ['duration']),
        end: new Date(this.start.getTime() + event.duration),
        locationId: 0,
        start: new Date(this.start),
      },
      duration: event.duration,
      name: event.name,
      takenFromTimeline: false,
    });
  }

  public cancelEventDrag() {
    if (this.dummyEvent) {
      // Put the dragged event back onto the timeline
      const event = this.dummyEvent.draggedEvent;
      if (this.dummyEvent.takenFromTimeline) {
        this.putEvent(event, { mayIntersect: true, rerender: false });
        const location = this.getLocation(event.locationId);
        const events = this.filterLocationEvents(location.id);
        this.materializePartial(this.renderEventRow(location, events));
      }
      if (this.onEventDragCancel) {
        this.onEventDragCancel(event);
      }
      // Clean up the dummy
      this.dematerializePartial('dummyEvent');
      delete this.dummyEvent;
      // Rerender the locations in order to apply some classes if needed
      this.materializePartial(this.renderLocations());
    }
  }

  public isDraggingEvent() {
    return !!this.dummyEvent;
  }

  public setSnapToMins(mins: number) {
    this.snapToMins = mins;
  }

  private dragDummyEvent(dummyEvent: DummyEvent) {
    this.dummyEvent = dummyEvent;
    // Place on the last mouse position on the timeline
    if (this.lastPicked) {
      this.moveDummyEvent(this.lastPicked);
    }
    // TODO: Observer pattern would be better here
    // Rerender the locations in order to apply some classes if needed
    this.materializePartial(this.renderLocations());
  }

  private completeEventDrag() {
    const event = this.dummyEvent;
    // Check for collisions
    if (isNaN(event.locationId) || !event.start || this.collide(event)) {
      if (this.onEventDropRefusal) {
        this.onEventDropRefusal(event);
      }
      return;
    }
    // Add event if the operation hasn't been canceled by any event handler
    if (!this.onEventBeforeDrop || this.onEventBeforeDrop(event)) {
      // At this step there something may have changed by
      // the callback above, so here we do the collision check again.
      try {
        this.dematerializePartial('dummyEvent');
        delete this.dummyEvent;
        // We've checked the locationId to be non NaN above
        const newEvent = this.putEvent({
          ...cloneDeep(event.draggedEvent),
          end: clone(event.end),
          locationId: event.locationId,
          start: clone(event.start),
        });
        // Rerender the row of events
        const location = this.getLocation(event.locationId);
        const events = this.filterLocationEvents(location.id);
        this.materializePartial(this.renderEventRow(location, events));

        if (this.onEventDrop) {
          this.onEventDrop(newEvent);
        }
        // TODO: Observer pattern would be better here
        // Rerender the locations in order to apply some classes if needed
        this.materializePartial(this.renderLocations());
      } catch (e) {
        if (!(e instanceof SkedEventCollisionError)) {
          throw e;
        }
        if (this.onEventDropRefusal) {
          this.onEventDropRefusal(event);
        }
      }
    }
  }

  /**
   * Mutates dummyEvent to conform a position info.
   *
   * @param picked The position info returned by the pick() function.
   */
  private moveDummyEvent(picked: PointData) {
    const event = this.dummyEvent;
    let start = picked.date;
    if (this.snapToMins) {
      const hr = floorHours(start);
      const left = (start.getTime() - hr.getTime()) / MS_PER_MINUTE;
      const lower = Math.floor(left / this.snapToMins) * this.snapToMins;
      const min = left - lower < this.snapToMins / 2 ? lower : lower + this.snapToMins;
      start = new Date(hr.getTime() + Math.round(min * MS_PER_MINUTE));
    }
    event.start = start;
    event.end = new Date(start.getTime() + event.duration);
    if (picked.locationId) {
      const location = this.getLocation(picked.locationId);
      if (!this.canAddIntoLocation || this.canAddIntoLocation(location, event)) {
        if (picked.locationId !== event.locationId) {
          if (this.beforeAddIntoLocation) {
            this.beforeAddIntoLocation(location, event);
          }
          event.locationId = picked.locationId;
          const vNode = this.renderDummyEvent(event);
          this.dematerializePartial('dummyEvent');
          this.materializeNewChild('eventRow' + event.locationId, vNode);
        } else if (!this.refs.dummyEvent) {
          const vNode = this.renderDummyEvent(event);
          this.dematerializePartial('dummyEvent');
          this.materializeNewChild('eventRow' + event.locationId, vNode);
        } else {
          const vNode = this.renderDummyEvent(event);
          this.materializePartial(vNode);
        }
      }
    }
  }

  private findEventsAtTime(date: Date, locationId: number): SkedEvent[] {
    const time = date.getTime();
    return this.getEvents().filter(event => (
      event.locationId === locationId &&
      event.start.getTime() <= time && event.end.getTime() >= time
    ));
  }

  private pick(e: MouseEvent): PointData {
    const timeline = this.refs.timeline as HTMLElement;
    const scalar = (e.pageX - getElementOffset(timeline).left) / timeline.clientWidth;
    const time = this.start.getTime() + scalar * (this.end.getTime() - this.start.getTime());
    const rowEl = closest(e.target as HTMLElement, '.sked-tape__event-row');
    return {
      date: new Date(Math.round(time)),
      locationId: rowEl ? parseInt(rowEl.dataset.locationId, 10) : undefined,
    };
  }

  private registerEventHandlers() {
    this.registerEventHandler('click', '.sked-tape__event',
      this.handleEventClick.bind(this));
    this.registerEventHandler('contextmenu', '.sked-tape__event',
      this.handleEventContextMenu.bind(this));
    this.registerEventHandler('click', '.sked-tape__timeline-wrap',
      this.handleTimelineClick.bind(this));
    this.registerEventHandler('contextmenu', '.sked-tape__timeline-wrap',
      this.handleTimelineContextMenu.bind(this));
    this.registerEventHandler('mousemove', '.sked-tape__timeline-wrap',
      this.handleMouseMove.bind(this));
    this.registerEventHandler('keydown', '.sked-tape__time-frame',
      this.handleKeyDown.bind(this));
    this.registerEventHandler('wheel', '.sked-tape__time-frame',
      this.handleWheel.bind(this));
    this.registerEventHandler('click', '.sked-tape__intersection',
      this.handleIntersectionClick.bind(this));
    this.registerEventHandler('contextmenu', '.sked-tape__intersection',
      this.handleIntersectionContextMenu.bind(this));
  }

  private unregisterEventHandlers() {
    for (const listener of this.listeners) {
      this.root.removeEventListener(listener.type, listener.listener);
    }
    this.listeners = [];
  }

  private registerEventHandler(
    type: string,
    selector: string,
    handler: (event: Event, currentTarget: HTMLElement) => void,
  ) {
    const listener = (event: Event) => {
      const currentTarget = closest(event.target as HTMLElement, selector);
      if (currentTarget) {
        handler(event, currentTarget);
      }
    };
    this.listeners.push({ listener, type });
    this.root.addEventListener(type, listener);
  }

  private handleEventClick(mouseEvent: MouseEvent, currentTarget: HTMLElement) {
    const eventId = parseInt(currentTarget.dataset.eventId, 10);
    if (this.dndEnabled) {
      this.dragEvent(eventId);
    } else if (this.onEventClick) {
      this.onEventClick(this.getEvent(eventId), mouseEvent);
    }
  }

  private handleEventContextMenu(mouseEvent: MouseEvent, currentTarget: HTMLElement) {
    mouseEvent.preventDefault();
    if (this.rmbCancelsDrag && this.isDraggingEvent()) {
      this.cancelEventDrag();
    } else if (this.onEventMenu) {
      const eventId = parseInt(currentTarget.dataset.eventId, 10);
      this.onEventMenu(this.getEvent(eventId), mouseEvent);
    }
  }

  private handleIntersectionClick(mouseEvent: MouseEvent) {
    if (this.onIntersectionClick) {
      const pointData = this.pick(mouseEvent);
      const events = this.findEventsAtTime(pointData.date, pointData.locationId);
      this.onIntersectionClick(events, pointData, mouseEvent);
    }
  }

  private handleIntersectionContextMenu(mouseEvent: MouseEvent) {
    mouseEvent.preventDefault();
    if (this.rmbCancelsDrag && this.isDraggingEvent()) {
      this.cancelEventDrag();
    } else if (this.onIntersectionMenu) {
      const pointData = this.pick(mouseEvent);
      const events = this.findEventsAtTime(pointData.date, pointData.locationId);
      this.onIntersectionMenu(events, pointData, mouseEvent);
    }
  }

  private handleTimelineClick(mouseEvent: MouseEvent) {
    if (!eventFromSkedEvent(mouseEvent)) {
      if (this.dummyEvent && this.dummyEvent.locationId) {
        this.completeEventDrag();
      } else if (!this.dummyEvent && this.onTimelineClick) {
        this.onTimelineClick(mouseEvent, this.pick(mouseEvent));
      }
    }
  }

  private handleTimelineContextMenu(mouseEvent: MouseEvent) {
    if (!eventFromSkedEvent(mouseEvent)) {
      mouseEvent.preventDefault();
      if (this.rmbCancelsDrag && this.isDraggingEvent()) {
        this.cancelEventDrag();
      } else if (this.onTimelineMenu) {
        this.onTimelineMenu(mouseEvent, this.pick(mouseEvent));
      }
    }
  }

  private handleMouseMove(mouseEvent: MouseEvent) {
    this.lastPicked = this.pick(mouseEvent);
    if (this.dummyEvent) {
      this.moveDummyEvent(this.lastPicked);
    }
  }

  private handleKeyDown(kbdEvent: KeyboardEvent) {
    if (kbdEvent.key === '+') {
      this.zoomIn();
    } else if (kbdEvent.key === '-') {
      this.zoomOut();
    }
  }

  private handleWheel(wheelEvent: WheelEvent) {
    if (wheelEvent.ctrlKey) {
      wheelEvent.preventDefault();
      wheelEvent.stopPropagation();
      if (wheelEvent.deltaY < 0) {
        this.zoomIn();
      } else {
        this.zoomOut();
      }
    } else if (!wheelEvent.shiftKey && this.scrollWithYWheel) {
      wheelEvent.preventDefault();
      wheelEvent.stopPropagation();
      const frame = this.refs.frame as HTMLElement;
      this.smoothScroller.addScrollBy({
        left: (wheelEvent.deltaY > 0 ? 1 : -1) * frame.clientWidth * 0.9,
      });
    }
  }

  private isGapTooSmall(events: SkedEvent[]): boolean {
    if (this.tooSmallInterval !== false) {
      let lastEndTime = 0;
      for (const event of events) {
        if (event.start.getTime() - lastEndTime <= this.tooSmallInterval) {
          return true;
        }
        lastEndTime = event.end.getTime();
      }
    }
    return false;
  }

  private uniqId(): number {
    return 1 + this.events.reduce(
      (id, event) => Math.max(id, event.id),
      (this.dummyEvent && this.dummyEvent.draggedEvent.id) || 0);
  }

  private computeEventWidth(event: Range<Date>): string {
    // Clamp to timeline edge
    const eventEnd = this.end < event.end ? this.end : event.end;
    const durationHours = getDurationHours(event.start, eventEnd);
    return durationHours / getDurationHours(this.start, this.end) * 100 + '%';
  }

  private computeEventOffset(event: Range<Date>): string {
    const hoursBeforeEvent =  getDurationHours(this.start, event.start);
    return hoursBeforeEvent /  getDurationHours(this.start, this.end) * 100 + '%';
  }

  private locationClasses = (location: SkedLocation, canAdd: boolean) => {
    return canAdd !== false ? [] : ['sked-tape__location--forbidden'];
  }

  private findEventJustBefore(event: DummyEvent): SkedEvent {
    return this.events.reduce((found, iEvent) => (
      (
        iEvent.locationId === event.locationId && // the same location
        iEvent.end < event.start &&               // ends before
        (!found || found.end < iEvent.end)        // comes after the found one
      )
      ? iEvent : found
    ), null);
  }

  private findEventJustAfter(event: DummyEvent): SkedEvent {
    return this.events.reduce((found, iEvent) => (
      (
        iEvent.locationId === event.locationId && // the same location
        iEvent.start > event.end &&               // starts after
        (!found || found.start > iEvent.start)    // comes before the found one
      )
      ? iEvent : found
    ), null);
  }

  private filterLocationEvents(locationId: number) {
    return this.events
      .filter(event => (
        event.locationId === locationId &&
        event.end > this.start &&
        event.start < this.end
      ))
      // Sort the events by time ascending in order that the gap
      // between each two of them may be determined in a cycle.
      .sort((a, b) => a.start.getTime() - b.start.getTime());
  }

  private getTimelineSpan(): number {
    return this.end.getTime() - this.start.getTime();
  }

  private computeCanvasWidth(): number {
    const base = this.getTimelineSpan() / MS_PER_HOUR * this.baseHourWidth;
    return Math.round(base * this.zoom);
  }

  private cleanup() {
    if (this.indicatorTimeout) {
      clearInterval(this.indicatorTimeout);
      delete this.indicatorTimeout;
    }
    this.unregisterEventHandlers();
    this.unscheduleRerender();
  }

  private renderLocationContent = (
    location: SkedLocation,
    createElement: CreateElementFn, // tslint:disable-line no-shadowed-variable
  ) => {
    return location.name;
  }

  private renderLocation(location: SkedLocation): VNode {
    let canAdd;
    if (this.isDraggingEvent()) {
      canAdd = !this.canAddIntoLocation || this.canAddIntoLocation(location, this.dummyEvent);
    }
    let classes = this.locationClasses(location, canAdd);
    classes = classes instanceof Array ? classes : [classes];
    return createElement(
      'div',
      {
        className: classes.concat('sked-tape__location').join(' '),
        dataset: { id: location.id },
        title: location.name,
      },
      createElement(
        'div',
        { className: 'sked-tape__location-text' },
        this.renderLocationContent(location, createElement),
      ),
    );
  }

  private renderLocations(): VNode {
    return createElement(
      'div',
      {
        className: 'sked-tape__locations',
        ref: 'locations',
      },
      this.getLocations().map(this.renderLocation.bind(this)),
    );
  }

  private renderAside(): VNode {
    return createElement(
      'div',
      {  className: 'sked-tape__aside' },
      [
        createElement(
          'div',
          { className: 'sked-tape__caption' },
          this.caption,
        ),
        this.renderLocations(),
      ],
    );
  }

  private renderEventContent = (
    event: SkedEvent,
    createElement: CreateElementFn, // tslint:disable-line no-shadowed-variable
  ): VNodeChild => {
    let children: VNodeChild = [event.name];
    if (this.showEventTime || this.showEventDuration) {
      const duration = this.format.roundDuration(
        event.end.getTime() - event.start.getTime(),
      );
      if (this.showEventTime) {
        const end = new Date(event.start.getTime() + duration);
        children = children.concat([
          createElement('br'),
          this.format.time(event.start) + ' - ' + this.format.time(end),
        ]);
      }
      if (this.showEventDuration) {
        children = children.concat([
          createElement('br'),
          this.format.duration(duration),
        ]);
      }
    }
    return children;
  }

  private renderEvent(event: SkedEvent, classes: string[] = []) {
    const BE_CLASS = 'sked-tape__event';
    classes.push(BE_CLASS);
    if (event.className) {
      classes.push(event.className);
    }
    if (event.disabled) {
      classes.push(BE_CLASS + '--disabled');
    }
    if (event.active) {
      classes.push(BE_CLASS + '--active');
    }

    const isAnchor = !!event.url && !event.disabled;
    const props = {
      className: classes.join(' '),
      dataset: {
        eventId: event.id,
        ...(event.data || {}),
      },
      style: {
        left: this.computeEventOffset(event),
        width: this.computeEventWidth(event),
      },
      title: event.name,
    };
    if (isAnchor) {
      (props as any).href = event.url;
    }

    return createElement(
      isAnchor ? 'a' : 'div',
      props,
      createElement(
        'div',
        { className: 'sked-tape__center' },
        this.renderEventContent(event, createElement),
      ),
    );
  }

  private renderEvents(events: SkedEvent[]): VNode[] {
    return events.map((event, index) => {
      const classes = [];
      // Check the gap is too small among the nearest events
      const nearestEvents = events.slice(Math.max(index - 1, 0), index + 2);
      if (this.isGapTooSmall(nearestEvents)) {
        classes.push('sked-tape__event--low-gap');
      } else if (countRangesIntersections(nearestEvents) > 0) {
        // We just have no a specific class for that yet...
        classes.push('sked-tape__event--low-gap');
      }
      return this.renderEvent(event, classes);
    }, this);
  }

  private renderTimeIndicator(location: SkedLocation): VNode {
    const indicatorClasses = ['sked-tape__indicator'];
    if (this.timeIndicatorSerifs) {
      indicatorClasses.push('sked-tape__indicator--serifs');
    }
    const style: { display?: string, left?: string } = {};
    const tzOffset = location.tzOffset === undefined ? this.tzOffset : location.tzOffset;
    const tzDiff = tzOffset - CURRENT_TZ_OFFSET;
    const now = new Date().getTime() - tzDiff * MS_PER_MINUTE;
    const start = this.start.getTime();
    const end = this.end.getTime();
    if (now >= start && now <= end) {
      style.left = 100 * (now - start) / (end - start) + '%';
    } else {
      style.display = 'none';
    }
    return createElement(
      'div',
      {
        className: indicatorClasses.join(' '),
        ref: 'timeIndicator' + location.id,
        style,
      },
    );
  }

  private renderGap(gap: number, start: Date, end: Date): VNode {
    const block: Range<Date> = { start, end };
    return createElement(
      'div',
      {
        className: 'sked-tape__gap',
        style: {
          left: this.computeEventOffset(block),
          width: this.computeEventWidth(block),
        },
      },
      createElement(
        'span',
        { className: 'sked-tape__gap-text' },
        Math.round(gap / MS_PER_MINUTE) + '',
      ),
    );
  }

  private renderGaps(
    events: SkedEvent[],
    intersections: SkedIntersection[],
  ): VNode[] {
    let lastEndTime = 0;
    let lastEnd: Date;
    const gaps = [];
    for (const event of events) {
      // whether the event intersects with some other
      const intersects = !!intersections.find(
        intersection => !!intersection.events.find(
          iEvent => iEvent.id === event.id,
        ),
      );
      const gap = event.start.getTime() - lastEndTime;
      if (gap >= this.minTimeGapShown && gap <= this.maxTimeGapShown && !intersects) {
        gaps.push(this.renderGap(gap, lastEnd, event.start));
      }
      lastEnd = event.end;
      lastEndTime = lastEnd.getTime();
    }
    return gaps;
  }

  private renderIntersections(intersections: SkedIntersection[]): VNode[] {
    return intersections
      .filter(i => i.end >= this.start && i.start <= this.end)
      .map(intersection => createElement(
        'div',
        {
          className: 'sked-tape__intersection',
          dataset: { events: intersection.events },
          style: {
            left: this.computeEventOffset(intersection),
            width: this.computeEventWidth(intersection),
          },
        },
      ));
  }

  private renderDummyEvent(event: DummyEvent): VNode {
    let leftText: VNodeChild = [this.format.time(event.start)];
    let rightText: VNodeChild = [this.format.time(event.end)];
    if (this.showIntermission) {
      const prevEvent = this.findEventJustBefore(event);
      if (prevEvent) {
        const interval = (event.start.getTime() - prevEvent.end.getTime()) / MS_PER_MINUTE;
        if (
          interval >= this.intermissionRange[0] &&
          interval <= this.intermissionRange[1]
        ) {
          leftText = leftText.concat(
            createElement('br'),
            this.format.duration(interval * MS_PER_MINUTE),
          );
        }
      }
      const nextEvent = this.findEventJustAfter(event);
      if (nextEvent) {
        const interval = (nextEvent.start.getTime() - event.end.getTime()) / MS_PER_MINUTE;
        if (
          interval >= this.intermissionRange[0] &&
          interval <= this.intermissionRange[1]
        ) {
          rightText = rightText.concat(
            createElement('br'),
            this.format.duration(interval * MS_PER_MINUTE),
          );
        }
      }
    }
    const timeClass = 'sked-tape__dummy-event-time';
    const leftClass = timeClass + ' ' + timeClass + '--left';
    const rightClass = timeClass + ' ' + timeClass + '--right';
    return createElement(
      'div',
      {
        className: 'sked-tape__dummy-event',
        ref: 'dummyEvent',
        style: {
          left: this.computeEventOffset(event as Range<Date>),
          width: this.computeEventWidth(event as Range<Date>),
        },
      },
      [
        createElement('div', { className: leftClass }, leftText),
        createElement('div', { className: rightClass }, rightText),
      ],
    );
  }

  private renderEventRow(location: SkedLocation, events: SkedEvent[]) {
    const intersections = this.getIntersections(location.id);
    const indicatorNode = this.renderTimeIndicator(location);
    const eventNodes = this.renderEvents(events);
    const gapNodes = this.renderGaps(events, intersections);
    const intersectionNodes = this.renderIntersections(intersections);
    let dummyEventNode: VNode | [] = [];
    if (this.dummyEvent && this.dummyEvent.locationId === location.id) {
      dummyEventNode = this.renderDummyEvent(this.dummyEvent);
    }
    return createElement(
      'li',
      {
        className: 'sked-tape__event-row',
        dataset: { locationId: location.id },
        ref: 'eventRow' + location.id,
      },
      [indicatorNode].concat(eventNodes, gapNodes, intersectionNodes, dummyEventNode),
    );
  }

  private renderTimeline(): VNode {
    const locations = this.getLocations();
    // Array of array of events. The outer array is mapped from locations.
    const eventsByRows: SkedEvent[][] = locations.map(
      location => this.filterLocationEvents(location.id),
    );
    return createElement(
      'ul',
      {
        className: 'sked-tape__timeline',
        ref: 'timeline',
      },
      locations.map((location, i) => this.renderEventRow(location, eventsByRows[i])),
    );
  }

  private renderHours(): VNode {
    const timePoints = [];
    const tick = new Date(this.start);
    while (tick.getTime() <= this.end.getTime()) {
      timePoints.push(new Date(tick));
      tick.setTime(tick.getTime() + 60 * 60 * 1000);
    }
    const lastTimePoint = timePoints.pop();

    return createElement(
      'div',
      { className: 'sked-tape__hours' },
      createElement(
        'ul',
        null,
        timePoints.map((timePoint, index) => {
          const times: VNode[] = [];
          for (let i = 0; i < (index === timePoints.length - 1 ? 2 : 1); i++) {
            const hour = i === 0 ? timePoint.getHours() : lastTimePoint.getHours();
            times.push(createElement(
              'time',
              { datetime: (i === 0 ? timePoint : lastTimePoint).toISOString() },
              this.format.hours(hour === 24 ? 0 : hour),
            ));
          }
          return createElement('li', null, times);
        }),
      ),
    );
  }

  private renderDates(): VNode {
    const firstMidnight = getMidnightAfter(this.start);
    const lastMidnight = getMidnightBefore(this.end);
    const queue: Array<{ weight: number, text: string }> = [];
    if (firstMidnight > lastMidnight) {
      // The range is within the same day
      queue.push({ weight: 1, text: this.format.date(this.start) });
    } else {
      queue.push({
        text: this.format.date(this.start),
        weight: getMsToMidnight(this.start) / MS_PER_DAY,
      });
      for (const day = new Date(firstMidnight); day < lastMidnight;) {
        day.setTime(day.getTime() + 1000);
        queue.push({ weight: 1, text: this.format.date(day) });
        day.setTime(day.getTime() + MS_PER_DAY - 1000);
      }
      queue.push({
        text: this.format.date(this.end),
        weight: getMsFromMidnight(this.end) / MS_PER_DAY,
      });
    }
    const totalWeight = queue.reduce((total, item) => total + item.weight, 0);
    const duration = this.end.getTime() - this.start.getTime();
    return createElement(
      'ul',
      { className: 'sked-tape__dates' },
      queue.map(item => {
        const proportion = item.weight / totalWeight;
        const classes = ['sked-tape__date'];
        if (proportion * duration <= SHORT_DURATION) {
          classes.push('sked-tape__date--short');
        }
        return createElement(
          'li',
          {
            className: classes.join(' '),
            style: { width: (proportion * 100).toFixed(10) + '%' },
            title: item.text,
          },
        );
      }),
    );
  }

  private renderGrid(): VNode {
    let n = Math.floor((this.end.getTime() - this.start.getTime()) / MS_PER_HOUR);
    const lis = [];
    while (n-- > 0) {
      lis.push(createElement('li'));
    }
    return createElement(
      'ul',
      { className: 'sked-tape__grid' },
      lis,
    );
  }

  private renderTimeWrap(oldScroll: number): VNode {
    const hours = this.renderHours();
    return createElement(
      'div',
      { className: 'sked-tape__time-wrap' },
      createElement(
        'div',
        {
          className: 'sked-tape__time-frame',
          ref: 'frame',
          scrollLeft: oldScroll || 0,
          tabIndex: 0,
        },
        createElement(
          'div',
          {
            className: 'sked-tape__time-canvas',
            ref: 'canvas',
            style: {
              width: this.computeCanvasWidth() + 'px',
            },
          },
          (this.showDates ? [this.renderDates()] : []).concat([
            hours,
            createElement(
              'div',
              { className: 'sked-tape__timeline-wrap' },
              [
                this.renderGrid(),
                this.renderTimeline(),
              ],
            ),
            hours.clone(),
          ]),
        ),
      ),
    );
  }

  private render({ preserveScroll = true }: { preserveScroll?: boolean } = {}) {
    let oldScrollLeft = 0;
    if (preserveScroll && this.refs.frame) {
      oldScrollLeft = (this.refs.frame as HTMLElement).scrollLeft;
    }

    this.cleanup();

    const classes = ['sked-tape'];
    if (this.showDates) {
      classes.push('sked-tape--has-dates');
    }
    if (this.zoom < 1) {
      classes.push('sked-tape--condensed');
    }
    const vRoot = createElement(
      'div',
      { className: classes.join(' ') },
      [
        this.renderAside(),
        this.renderTimeWrap(oldScrollLeft),
      ],
    );
    this.materialize(vRoot);

    if (!this.smoothScroller) {
      this.smoothScroller = new SmoothScroller(this.refs.frame as HTMLElement);
    } else {
      this.smoothScroller.resetElement(this.refs.frame as HTMLElement);
    }
    this.registerEventHandlers();

    this.indicatorTimeout = setInterval(() => {
      for (const location of this.locations) {
        this.materializePartial(this.renderTimeIndicator(location));
      }
    }, 1000);
  }

  private scheduleRerender() {
    if (!this.animFrameId) {
      if (window.requestAnimationFrame) {
        this.animFrameId = requestAnimationFrame(() => {
          delete this.animFrameId;
          this.render();
        });
      } else {
        this.animFrameId = setTimeout(() => {
          delete this.animFrameId;
          this.render();
        }, 0);
      }
    }
  }

  private unscheduleRerender() {
    if (this.animFrameId) {
      if (window.cancelAnimationFrame) {
        cancelAnimationFrame(this.animFrameId);
      } else {
        clearTimeout(this.animFrameId);
      }
      delete this.animFrameId;
    }
  }
}
