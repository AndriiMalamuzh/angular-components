import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ripple]',
  host: {
    class: 'ripple-wrap',
    '(click)': 'onClick($event)',
  },
})
export class RippleDirective {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  onClick(event: MouseEvent): void {
    const el = this.el.nativeElement;
    if (el.disabled || el.hasAttribute('disabled')) return;

    const rect = el.getBoundingClientRect();
    const ripple = this.renderer.createElement('span');
    this.renderer.addClass(ripple, 'ripple');

    const diameter = Math.sqrt(rect.width ** 2 + rect.height ** 2) * 2;
    const offsetX = event.clientX - rect.left - diameter / 2;
    const offsetY = event.clientY - rect.top - diameter / 2;

    this.renderer.setStyle(ripple, 'width', `${diameter}px`);
    this.renderer.setStyle(ripple, 'height', `${diameter}px`);
    this.renderer.setStyle(ripple, 'top', `${offsetY}px`);
    this.renderer.setStyle(ripple, 'left', `${offsetX}px`);

    this.renderer.appendChild(el, ripple);

    ripple.addEventListener(
      'animationend',
      () => {
        if (el.contains(ripple)) {
          this.renderer.removeChild(el, ripple);
        }
      },
      { once: true }
    );
  }
}
