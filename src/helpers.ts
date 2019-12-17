export const SECS_PER_DAY = 24 * 60 * 60;
export const MS_PER_DAY = SECS_PER_DAY * 1000;
export const MS_PER_MINUTE = 60 * 1000;
export const MS_PER_HOUR = 60 * MS_PER_MINUTE;

export interface Range<T> {
  start: T;
  end: T;
}

export function rangesIntersection<T>(a: Range<T>, b: Range<T>): Range<T> {
  const min = a.start < b.start  ? a : b;
  const max = min === a ? b : a;

  // min ends before max starts -> no intersection
  if (min.end < max.start) {
    return null;
  }

  return {
    end: min.end < max.end ? min.end : max.end,
    start: max.start,
  };
}

export function countRangesIntersections<T>(ranges: Array<Range<T>>): number {
  let count: number = 0;
  for (let i = 1; i < ranges.length; i++) {
    if (rangesIntersection(ranges[i - 1], ranges[i]) !== null) {
      ++count;
    }
  }
  return count;
}

export function closest(el: HTMLElement, selector: string): HTMLElement {
  while (el && !el.matches(selector)) {
    el = el.parentElement;
  }
  return el;
}

export function removeClass(el: HTMLElement, names: string) {
  const prohibited = names.split(' ');
  const className = el.className
    .split(' ')
    .filter(name => prohibited.indexOf(name) < 0)
    .join(' ');
  if (el.className !== className) {
    el.className = className;
  }
}

export function addClass(el: HTMLElement, names: string) {
  const prohibited = names.split(' ');
  const className = el.className
    .split(' ')
    .filter(name => prohibited.indexOf(name) < 0)
    .concat(prohibited)
    .join(' ');
  if (el.className !== className) {
    el.className = className;
  }
}

export function getElementOffset(element: HTMLElement) {
  const de = document.documentElement;
  const box = element.getBoundingClientRect();
  const top = box.top + window.pageYOffset - de.clientTop;
  const left = box.left + window.pageXOffset - de.clientLeft;
  return { top, left };
}

export function floorHours(date: Date): Date {
  const floor = new Date(date);
  floor.setHours(date.getHours(), 0, 0, 0);
  return floor;
}

export function ceilHours(date: Date): Date {
  const floor = floorHours(date);
  if (floor < date) { // not equal
    floor.setTime(floor.getTime() + MS_PER_HOUR);
  }
  return floor;
}

export function eventFromSkedEvent(e: MouseEvent) {
  return !!closest(e.target as HTMLElement, '.sked-tape__event, .sked-tape__intersection');
}

export function getDurationHours(start: Date, end: Date) {
  return (end.getTime() - start.getTime()) / MS_PER_HOUR;
}

export function getMsFromMidnight(d: Date) {
  const secs = d.getHours() * 60 * 60 + d.getMinutes() * 60 + d.getSeconds();
  return secs * 1000 + d.getMilliseconds();
}

export function getMsToMidnight(d: Date) {
  return MS_PER_DAY - getMsFromMidnight(d);
}

export function getMidnightAfter(d: Date) {
  d = new Date(d);
  d.setTime(d.getTime() + getMsToMidnight(d));
  return d;
}

export function getMidnightBefore(d: Date) {
  d = new Date(d);
  d.setTime(d.getTime() - getMsFromMidnight(d));
  return d;
}

export function gapBetween(a: Range<Date>, b: Range<Date>) {
  const min = a.start < b.start  ? a : b;
  const max = min === a ? b : a;
  return max.start.getTime() - min.end.getTime();
}
