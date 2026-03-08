import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  input,
  model,
  output,
  viewChild,
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
  readonly value = input.required<string>();
  readonly name = input.required<string>();
  readonly checked = model<boolean>(false);
  readonly disabled = model<boolean>(false);
  readonly labelPosition = input<'before' | 'after'>('after');

  readonly radioChange = output<string>();

  readonly inputRef =
    viewChild.required<ElementRef<HTMLInputElement>>('inputRef');

  private onChangeFn: (value: string) => void = () => {};
  private onTouchedFn: () => void = () => {};

  writeValue(value: string): void {
    this.checked.set(value === this.value());
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  onChange(event: Event): void {
    if (this.disabled()) return;
    this.commitChange((event.target as HTMLInputElement).value);
  }

  onRadioKeydown(event: KeyboardEvent): void {
    if ((event.key === 'Enter' || event.key === ' ') && !this.disabled()) {
      event.preventDefault();
      this.inputRef().nativeElement.click();
    }
  }

  private commitChange(newValue: string): void {
    this.checked.set(newValue === this.value());
    this.onChangeFn(newValue);
    this.onTouchedFn();
    this.radioChange.emit(newValue);
  }
}
