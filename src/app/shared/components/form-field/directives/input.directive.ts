import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  output,
} from '@angular/core';

@Directive({
  selector: '[input]',
})
export class InputDirective {
  public elementRef = inject(ElementRef<HTMLInputElement>);

  focusEvent = output<void>();
  blurEvent = output<void>();
  inputEvent = output<string>();

  @HostBinding('class') className = 'form-field__input';

  setId(id: string) {
    this.elementRef.nativeElement.id = id;
  }

  getId(): string {
    return this.elementRef.nativeElement.id;
  }

  getValue(): string {
    return this.elementRef.nativeElement.value;
  }

  focus() {
    this.elementRef.nativeElement.focus();
  }

  isDisabled(): boolean {
    return this.elementRef.nativeElement.disabled;
  }

  isRequired(): boolean {
    return this.elementRef.nativeElement.required;
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

  @HostListener('focus')
  handleFocus() {
    this.focusEvent.emit();
  }

  @HostListener('blur')
  handleBlur() {
    this.blurEvent.emit();
  }

  @HostListener('input', ['$event.target.value'])
  handleInput(value: string) {
    this.inputEvent.emit(value);
  }
}
