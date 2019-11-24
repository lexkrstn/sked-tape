export default class SkedEventCollisionError extends Error {
  constructor(private eventId: number) {
    super();

    this.name = 'SkedEventCollisionError';
    this.message = 'Collision with entry #' + eventId;
    // Use V8's native method if available, otherwise fallback
    if ('captureStackTrace' in Error) {
      Error.captureStackTrace(this, SkedEventCollisionError);
    } else {
      this.stack = (new (Error as any)()).stack;
    }
  }
}
