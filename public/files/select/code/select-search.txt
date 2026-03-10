import { Directive } from '@angular/core';

@Directive({
  selector: '[select-search]',
  host: { class: 'select-options__search' },
})
export class SelectSearchDirective {}
