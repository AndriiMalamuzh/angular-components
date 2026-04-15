import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToastPosition } from 'src/app/shared/components/toast/toast.model';

@Component({
  selector: 'app-toast-container',
  template: '',
  styles: [
    `
      :host {
        position: fixed;
        z-index: 99999999;
        display: flex;
        flex-direction: column;
        max-width: calc(100vw - 40px);
      }

      :host(.toast-container--top-right) {
        top: 20px;
        right: 20px;
      }

      :host(.toast-container--top-left) {
        top: 20px;
        left: 20px;
      }

      :host(.toast-container--bottom-right) {
        bottom: 20px;
        right: 20px;
      }

      :host(.toast-container--bottom-left) {
        bottom: 20px;
        left: 20px;
      }
    `,
  ],
  host: {
    '[class.toast-container--top-right]': 'position() === "topRight"',
    '[class.toast-container--top-left]': 'position() === "topLeft"',
    '[class.toast-container--bottom-right]': 'position() === "bottomRight"',
    '[class.toast-container--bottom-left]': 'position() === "bottomLeft"',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastContainerComponent {
  readonly position = signal<ToastPosition>('topRight');
}
