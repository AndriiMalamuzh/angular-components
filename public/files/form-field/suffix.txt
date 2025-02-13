import { Directive, ElementRef, HostBinding, inject } from '@angular/core';

@Directive({
  selector: '[form-field-suffix]',
})
export class FormFieldSuffixDirective {
  public elementRef = inject(ElementRef<HTMLElement>);

  @HostBinding('class') className = 'form-field__suffix';
}
