import Observer from './Observer';

export default class Subject<E = void> {
  private observers: Array<Observer<E>> = [];

  public addObserver(observer: Observer<E>) {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer<E>) {
    const index = this.observers.findIndex(i => i === observer);
    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  public notifyObservers(event: E) {
    for (const observer of this.observers) {
      observer.onObservableUpdated(this, event);
    }
  }
}
