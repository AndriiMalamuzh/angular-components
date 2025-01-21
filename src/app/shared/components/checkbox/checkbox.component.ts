import { Component, forwardRef, input, model, output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-checkbox',
  imports: [NgClass],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  value = input<string>('');
  checked = model<boolean>(false);
  indeterminate = model<boolean>(false);
  disabled = model<boolean>(false);
  labelPosition = input<'before' | 'after'>('after');

  checkboxChange = output<boolean>();

  private onChangeFn: (value: boolean) => void = () => {};
  private onTouchedFn: () => void = () => {};

  toggleChecked() {
    if (this.disabled()) {
      return;
    }
    this.checked.update(res => !res);
    this.indeterminate.set(false);
    this.onChangeFn(this.checked());
    this.onTouchedFn();
    this.checkboxChange.emit(this.checked());
  }

  onChange(event: Event) {
    this.checked.set((event.target as HTMLInputElement).checked);
    this.onChangeFn(this.checked());
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

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  onCheckboxPressEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !this.disabled()) {
      this.toggleChecked();
    }
  }
}
