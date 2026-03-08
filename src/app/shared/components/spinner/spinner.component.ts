import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  host: {
    role: 'status',
    '[style]': 'hostStyles()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  readonly size = input<number>(24);
  readonly color = input<string>('currentColor');
  readonly thickness = input<number>(2);

  readonly hostStyles = computed(() => ({
    '--spinner-size': `${this.size()}px`,
    '--spinner-color': this.color(),
    '--spinner-thickness': `${this.thickness()}px`,
  }));
}
