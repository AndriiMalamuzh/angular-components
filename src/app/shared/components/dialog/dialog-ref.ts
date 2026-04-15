import { Subject, Observable } from 'rxjs';

export class DialogRef<R = unknown> {
  private readonly afterClosedSubject = new Subject<R | undefined>();
  private readonly closeRequestSubject = new Subject<R | undefined>();

  /** Emits when a close is requested (before leave animation). */
  readonly closeRequested$ = this.closeRequestSubject.asObservable();

  afterClosed(): Observable<R | undefined> {
    return this.afterClosedSubject.asObservable();
  }

  close(result?: R): void {
    this.closeRequestSubject.next(result);
  }

  /** Called by the container after leave animation completes. */
  finalize(result?: R): void {
    this.afterClosedSubject.next(result);
    this.afterClosedSubject.complete();
    this.closeRequestSubject.complete();
  }
}
