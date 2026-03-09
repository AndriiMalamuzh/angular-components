import { Directive } from '@angular/core';

@Directive({
  selector: '[form-field-prefix]',
  host: { class: 'form-field__prefix' },
})
export class FormFieldPrefixDirective {}
