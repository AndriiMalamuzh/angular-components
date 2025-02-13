import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
  model,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioComponent implements ControlValueAccessor {
  value = input.required<any>();
  name = input.required<string>();
  checked = model<boolean>(false);
  disabled = model<boolean>(false);
  labelPosition = input<'before' | 'after'>('after');

  public changed: (value: string) => void = () => {};
  public touched: () => void = () => {};

  writeValue(value: string): void {
    this.checked.set(value === this.value());
  }

  onChange(event: Event) {
    const value: string = (event.target as HTMLInputElement).value;
    this.changed(value);
    this.checked.set(value === this.value());
  }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  onTouched(): void {
    this.touched();
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}
