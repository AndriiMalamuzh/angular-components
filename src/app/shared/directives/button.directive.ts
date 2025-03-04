import { Directive, HostBinding, input } from '@angular/core';
import { RippleDirective } from './ripple.directive';

@Directive({
  selector: '[button]',
  hostDirectives: [RippleDirective],
})
export class ButtonDirective {
  color = input<'primary' | 'secondary'>();
  view = input.required<'flat' | 'stroked'>();
  isIcon = input<boolean>(false);

  @HostBinding('class') get classes(): string {
    const colorClass = this.color() ? 'button-' + this.color() : '';
    return (
      `button button-${this.view()}` +
      (colorClass ? ' ' + colorClass : '') +
      (this.isIcon() ? ' button-icon' : '')
    );
  }
}
