import {
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[badge]',
  host: {
    '[class.badge]': 'badge() != null',
  },
})
export class BadgeDirective {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  readonly badge = input<string | number>();
  readonly badgeAriaLabel = input<string>();

  constructor() {
    effect(() => {
      this.updateBadge();
    });
  }

  private updateBadge(): void {
    const existing = this.el.nativeElement.querySelector('.badge__content');
    if (existing) {
      this.renderer.removeChild(this.el.nativeElement, existing);
    }

    if (this.badge() == null) return;

    const span = this.renderer.createElement('span');
    this.renderer.addClass(span, 'badge__content');
    this.renderer.setAttribute(span, 'role', 'status');
    if (this.badgeAriaLabel()) {
      this.renderer.setAttribute(span, 'aria-label', this.badgeAriaLabel()!);
    }
    this.renderer.appendChild(
      span,
      this.renderer.createText(String(this.badge()))
    );
    this.renderer.appendChild(this.el.nativeElement, span);
  }
}
