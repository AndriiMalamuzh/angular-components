import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
  model,
  output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent implements ControlValueAccessor {
  readonly value = input<string>('');
  readonly checked = model<boolean>(false);
  readonly indeterminate = model<boolean>(false);
  readonly disabled = model<boolean>(false);
  readonly labelPosition = input<'before' | 'after'>('after');

  readonly checkboxChange = output<boolean>();

  private onChangeFn: (value: boolean) => void = () => {};
  private onTouchedFn: () => void = () => {};

  private commitChange(newValue: boolean): void {
    this.checked.set(newValue);
    this.indeterminate.set(false);
    this.onChangeFn(newValue);
    this.onTouchedFn();
    this.checkboxChange.emit(newValue);
  }

  // Used only from keyboard — mouse clicks go through onChange via native label→input
  toggleChecked(): void {
    if (this.disabled()) return;
    this.commitChange(!this.checked());
  }

  // Fires via native label→input click
  onChange(event: Event): void {
    if (this.disabled()) return;
    this.commitChange((event.target as HTMLInputElement).checked);
  }

  writeValue(value: boolean): void {
    this.checked.set(value);
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  onCheckboxKeydown(event: KeyboardEvent): void {
    if ((event.key === 'Enter' || event.key === ' ') && !this.disabled()) {
      event.preventDefault();
      this.toggleChecked();
    }
  }
}
