import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]'
})
export class ScrollAnimate {

@Input() animationClass: string = 'tracking-in-expand-fwd-bottom';

constructor(private el: ElementRef, private renderer: Renderer2) {}

ngAfterViewInit(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation class
          this.renderer.addClass(this.el.nativeElement, this.animationClass);
        } else {
          // Remove it when out of view (so it can retrigger)
          this.renderer.removeClass(this.el.nativeElement, this.animationClass);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(this.el.nativeElement);
}
}
