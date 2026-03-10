import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { SelectComponent } from 'src/app/shared/components/select/select.component';

@Component({
  selector: 'app-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss',
  host: { '(click)': 'onClick()' },
})
export class OptionComponent {
  private readonly select = inject(SelectComponent);
  readonly el = inject(ElementRef);

  readonly value = input<string>();
  readonly isSelected = signal<boolean>(false);
  readonly isFocused = signal<boolean>(false);

  onClick(): void {
    this.select.selectOption(this);
  }

  scrollIntoView(): void {
    this.el.nativeElement.scrollIntoView({ block: 'nearest' });
  }
}
