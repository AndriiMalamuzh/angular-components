import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[ripple]',
})
export class RippleDirective {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  @HostBinding('class')
  className = 'ripple-wrap';

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const ripple = this.renderer.createElement('span');
    this.renderer.addClass(ripple, 'ripple');

    const circleDiameter = Math.sqrt(rect.width ** 2 + rect.height ** 2) * 2;
    const offsetX = event.clientX - rect.left - circleDiameter / 2;
    const offsetY = event.clientY - rect.top - circleDiameter / 2;

    this.renderer.setStyle(ripple, 'width', `${circleDiameter}px`);
    this.renderer.setStyle(ripple, 'height', `${circleDiameter}px`);
    this.renderer.setStyle(ripple, 'top', `${offsetY}px`);
    this.renderer.setStyle(ripple, 'left', `${offsetX}px`);

    this.renderer.appendChild(this.el.nativeElement, ripple);

    setTimeout(() => {
      this.renderer.removeChild(this.el.nativeElement, ripple);
    }, 1000);
  }
}
