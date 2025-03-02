import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[select-search]',
})
export class SelectSearchDirective {
  @HostBinding('class')
  className = 'select-options__search';
}
