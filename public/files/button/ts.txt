import {
  AfterViewInit,
  booleanAttribute,
  computed,
  Directive,
  ElementRef,
  inject,
  input,
  Renderer2,
} from '@angular/core';
import { RippleDirective } from './ripple.directive';

@Directive({
  selector: '[button]',
  hostDirectives: [RippleDirective],
  host: {
    '[class]': 'classes()',
    '[attr.disabled]': 'loading() || disabled() || null',
    '[attr.aria-busy]': 'loading() || null',
    '[attr.aria-disabled]': 'loading() || disabled() || null',
    '[attr.tabindex]': 'loading() || disabled() ? -1 : null',
  },
})
export class ButtonDirective implements AfterViewInit {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  readonly color = input<'primary' | 'secondary'>();
  readonly view = input.required<'flat' | 'stroked'>();
  readonly isIcon = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });
  readonly disabled = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });
  readonly loading = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });
  readonly fullWidth = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });

  readonly classes = computed(() => {
    const parts = ['button', `button--${this.view()}`];
    if (this.color()) parts.push(`button--${this.color()}`);
    if (this.isIcon()) parts.push('button--icon');
    if (this.loading()) parts.push('button--loading');
    if (this.fullWidth()) parts.push('button--block');
    return parts.join(' ');
  });

  ngAfterViewInit(): void {
    const el = this.el.nativeElement;
    const wrapper = this.renderer.createElement('span');
    this.renderer.addClass(wrapper, 'button__content');
    Array.from(el.childNodes).forEach(child => wrapper.appendChild(child));
    this.renderer.appendChild(el, wrapper);
  }
}
