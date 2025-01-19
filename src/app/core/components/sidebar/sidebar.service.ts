import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isOpenSignal = signal<boolean>(false);

  onOpenSidebar(): void {
    document.body.classList.add('no-scroll');
    this.isOpenSignal.set(true);
  }

  onCloseSidebar(): void {
    document.body.classList.remove('no-scroll');
    this.isOpenSignal.set(false);
  }
}
