import { ComponentRef } from '@angular/core';
import { Subject } from 'rxjs';

export class DialogRef<T = any> {
  private afterClosedSubject = new Subject<T>();
  public afterClosed = this.afterClosedSubject.asObservable();

  constructor(private containerRef: ComponentRef<any>) {}

  close(result?: T): void {
    this.afterClosedSubject.next(result);
    this.afterClosedSubject.complete();

    this.containerRef.destroy();
  }
}
