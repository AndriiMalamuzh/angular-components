import { Directive } from '@angular/core';

@Directive({
  selector: '[form-field-suffix]',
  host: { class: 'form-field__suffix' },
})
export class FormFieldSuffixDirective {}
