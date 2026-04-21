import { Directive, ElementRef, OnInit, Inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit {
  @Input('appScrollReveal') animationClass: string = 'reveal-up';
  
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Add base animation class
      this.el.nativeElement.classList.add(this.animationClass);
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // Stop observing once animated in
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      });
      
      observer.observe(this.el.nativeElement);
    }
  }
}
