import { Directive, ElementRef, inject, output } from '@angular/core';

@Directive({
  selector: '[input]',
  host: {
    class: 'form-field__input',
    '(focus)': 'handleFocus()',
    '(blur)': 'handleBlur()',
    '(input)': 'handleInput($event)',
  },
})
export class InputDirective {
  readonly el = inject(ElementRef<HTMLInputElement>);

  readonly focusEvent = output<void>();
  readonly blurEvent = output<void>();
  readonly inputEvent = output<string>();

  setId(id: string) {
    this.el.nativeElement.id = id;
  }

  getValue(): string {
    return this.el.nativeElement.value;
  }

  focus() {
    this.el.nativeElement.focus();
  }

  isDisabled(): boolean {
    return this.el.nativeElement.disabled;
  }

  isRequired(): boolean {
    return this.el.nativeElement.required;
  }

  onFocus(callback: () => void) {
    this.focusEvent.subscribe(callback);
  }

  onBlur(callback: () => void) {
    this.blurEvent.subscribe(callback);
  }

  onInput(callback: (value: string) => void) {
    this.inputEvent.subscribe(callback);
  }

  handleFocus() {
    this.focusEvent.emit();
  }

  handleBlur() {
    this.blurEvent.emit();
  }

  handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.inputEvent.emit(input.value);
  }
}
