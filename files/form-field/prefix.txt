import { Directive, ElementRef, HostBinding, inject } from '@angular/core';

@Directive({
  selector: '[form-field-prefix]',
})
export class FormFieldPrefixDirective {
  public elementRef = inject(ElementRef<HTMLElement>);

  @HostBinding('class') className = 'form-field__prefix';
}
