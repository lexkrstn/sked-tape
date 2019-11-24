declare class Subject {}

export default interface Observer<E = void> {
  onObservableUpdated(subject: Subject, data: E): void;
}
