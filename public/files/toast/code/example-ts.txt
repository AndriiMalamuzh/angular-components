import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { ToastService } from 'src/app/shared/components/toast/toast.service';
import { ToastConfig } from 'src/app/shared/components/toast/toast.model';

@Component({
  selector: 'app-toast',
  imports: [IconComponent],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.toast--success]': 'type() === "success"',
    '[class.toast--error]': 'type() === "error"',
    '[class.toast--warning]': 'type() === "warning"',
    '[class.toast--info]': 'type() === "info"',
    '[class.toast-position--bottom-right]': 'position() === "bottomRight"',
    '[class.toast-position--bottom-left]': 'position() === "bottomLeft"',
    '[attr.role]': 'role()',
    '[attr.aria-live]': 'ariaLive()',
    'aria-atomic': 'true',
    '(keydown.escape)': 'onClose()',
  },
})
export class ToastComponent implements OnInit {
  private readonly toastService = inject(ToastService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly elRef = inject(ElementRef<HTMLElement>);

  readonly config = signal<ToastConfig>({ message: '' });
  readonly show = signal(false);

  readonly type = computed(() => this.config().type ?? 'success');
  readonly position = computed(() => this.config().position ?? 'topRight');
  readonly message = computed(() => this.config().message);
  readonly displayTitle = computed(() => this.config().summary || this.type());
  readonly iconName = computed(() => `toast-${this.type()}`);
  readonly role = computed(() =>
    this.type() === 'error' || this.type() === 'warning' ? 'alert' : 'status'
  );
  readonly ariaLive = computed(() =>
    this.type() === 'error' || this.type() === 'warning'
      ? 'assertive'
      : 'polite'
  );

  ngOnInit(): void {
    const showTimeout = setTimeout(() => {
      this.show.set(true);
      this.elRef.nativeElement.classList.add('toast-host--visible');
    }, 10);

    let hideTimeout: ReturnType<typeof setTimeout> | undefined;
    if (!this.config().sticky) {
      hideTimeout = setTimeout(
        () => this.startLeave(),
        this.config().duration ?? 3000
      );
    }

    this.destroyRef.onDestroy(() => {
      clearTimeout(showTimeout);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    });
  }

  onClose(): void {
    this.startLeave();
  }

  private startLeave(): void {
    if (!this.show()) return;
    this.show.set(false);

    const host = this.elRef.nativeElement;
    host.classList.remove('toast-host--visible');
    host.classList.add('toast-host--leaving');

    setTimeout(() => {
      this.toastService.close(this);
    }, 200);
  }
}
