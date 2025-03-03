import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  OnInit,
  signal,
} from '@angular/core';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { ToastService } from 'src/app/shared/components/toast/toast.service';

@Component({
  selector: 'app-toast',
  imports: [IconComponent],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent implements OnInit {
  private toastService = inject(ToastService);

  message = model<string>();
  type = model<'success' | 'error' | 'warning' | 'info'>();
  duration = model<number>();

  show = signal<boolean>(false);

  ngOnInit(): void {
    setTimeout(() => {
      this.show.set(true);
    }, 10);
    setTimeout(() => {
      this.show.set(false);
    }, this.duration());
  }

  onClose(): void {
    this.show.set(false);
    setTimeout(() => {
      this.toastService.close();
    }, 150);
  }
}
