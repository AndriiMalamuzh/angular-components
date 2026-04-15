import {
  Component,
  ChangeDetectionStrategy,
  signal,
  inject,
  viewChild,
  ViewContainerRef,
  DestroyRef,
  type AnimationCallbackEvent,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DialogConfig } from '../../dialog-config';
import { DialogRef } from '../../dialog-ref';

const ANIMATION_DURATION = 200;

@Component({
  selector: 'app-dialog-container',
  templateUrl: './dialog-container.component.html',
  styleUrl: './dialog-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'dialog-container',
    '[style.z-index]': 'zIndex()',
  },
})
export class DialogContainerComponent {
  private readonly dialogRef = inject(DialogRef);
  private readonly destroyRef = inject(DestroyRef);

  readonly dialogContent = viewChild('dialogContent', {
    read: ViewContainerRef,
  });

  readonly config = signal<DialogConfig>({});
  readonly zIndex = signal(1000);
  readonly visible = signal(true);
  readonly panelClasses = signal<string[]>([]);

  private closeResult: unknown;

  init(): void {
    this.dialogRef.closeRequested$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => {
        this.closeResult = result;
        this.visible.set(false);
      });
  }

  onBackdropClick(): void {
    if (!this.config().disableClose) {
      this.dialogRef.close();
    }
  }

  onBackdropLeave(event: AnimationCallbackEvent): void {
    const el = event.target as HTMLElement;
    el.classList.add('dialog-overlay--leave');
    setTimeout(() => event.animationComplete(), ANIMATION_DURATION);
  }

  onPanelLeave(event: AnimationCallbackEvent): void {
    const el = event.target as HTMLElement;
    el.classList.add('dialog--leave');
    setTimeout(() => {
      event.animationComplete();
      this.dialogRef.finalize(this.closeResult);
    }, ANIMATION_DURATION);
  }
}
