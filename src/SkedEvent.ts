import isEqual from 'lodash.isequal';
import Subject from './Subject';

interface AnyObject {
  [key: string]: any;
}

/**
 * Own properties of SkedEvent.
 */
export interface SkedEventOwnProps {
  id: number;
  title: string;
}

/**
 * Full list of SkedEvent's properties (including some user-defined).
 */
export interface SkedEventProps<CustomData> extends SkedEventOwnProps {
  custom: CustomData;
}

/**
 * The model that represents schedule events.
 */
export default class SkedEvent<CustomData extends {}> extends Subject {
  private data: SkedEventProps<CustomData>;
  public constructor(props: SkedEventProps<CustomData>) {
    super();
    Object.assign(this.data, props);
    // tslint:disable no-object-literal-type-assertion
    this.data.custom = {} as CustomData;
    Object.assign(this.data.custom, props.custom);
  }
  /**
   * Sets an own property of the event.
   */
  public set<K extends keyof SkedEventOwnProps>(prop: K, value: SkedEventOwnProps[K]) {
    if (this.data[prop] !== value) {
      (this.data as SkedEventOwnProps)[prop] = value;
      this.notifyObservers();
    }
  }
  /**
   * Sets some own properties of the event.
   */
  public setSome(props: Partial<SkedEventOwnProps>) {
    Object.assign(this.data, props);
    this.notifyObservers();
  }
  /**
   * Returns an own property of the event.
   */
  public get<K extends keyof SkedEventOwnProps>(prop: K): SkedEventOwnProps[K] {
    return this.data[prop];
  }
  /**
   * Sets a custom (user-defined) property of the event.
   */
  public setCustom<K extends keyof CustomData>(prop: K, value: CustomData[K]) {
    this.data.custom[prop] = value;
    this.notifyObservers();
  }
  /**
   * Sets a custom (user-defined) property of the event.
   */
  public getCustom<K extends keyof CustomData>(prop: K): CustomData[K] {
    return this.data.custom[prop];
  }
  /**
   * Sets some own properties of the event.
   */
  public setSomeCustom(props: Partial<CustomData>) {
    Object.assign(this.data.custom, props);
  }
  /**
   * Returns a SkedEvent containing copy of the data of the current one.
   */
  public clone(): SkedEvent<CustomData> {
    return new SkedEvent<CustomData>(this.data);
  }
  /**
   * Returns names of the properties differ from the ones of the other event.
   * Names of custom properties are prefixed with `custom.`.
   */
  public difference(other: SkedEvent<CustomData>): string[] {
    const ownKeys = Object.keys(this.data).filter(
      key => (this.data as AnyObject)[key] !== (other.data as AnyObject)[key],
    );
    const customA = this.data.custom as AnyObject;
    const customB = other.data.custom as AnyObject;
    const customKeys = Object.keys(this.data.custom)
      .filter(key => customA[key] !== customB[key])
      .map(key => `custom.${key}`);
    return ownKeys.concat(customKeys);
  }
  /**
   * Returns true if the data of this event other one's are the same.
   */
  public equals(other: SkedEvent<CustomData>): boolean {
    return isEqual(this.data, other.data);
  }
}
