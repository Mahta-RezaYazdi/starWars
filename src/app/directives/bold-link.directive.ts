import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBoldLink]',
})
export class BoldLinkDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    this.renderer.addClass(
      this.element.nativeElement,
      'navigation__link--active'
    );
  }
}
