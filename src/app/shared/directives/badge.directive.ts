import {
  Directive,
  ElementRef,
  inject,
  input,
  OnChanges,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[badge]',
})
export class BadgeDirective implements OnChanges {
  badge = input<string | number>();

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngOnChanges(): void {
    this.updateBadge();
  }

  private updateBadge(): void {
    const existingBadge = this.el.nativeElement.querySelector('.badge-content');
    if (existingBadge) {
      this.renderer.removeChild(this.el.nativeElement, existingBadge);
    }

    this.el.nativeElement.classList.add('badge');
    const badge = this.renderer.createElement('span');
    this.renderer.addClass(badge, 'badge-content');
    const text = this.renderer.createText(this.badge() as string);
    this.renderer.appendChild(badge, text);
    this.renderer.appendChild(this.el.nativeElement, badge);
  }
}
