import { Directive, ElementRef, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Directive({
  selector: '[appReveal,.reveal, .reveal-left]'
})
export class Reveal implements OnInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const options = { threshold: 0.1 };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('active');
            // Stop observing once animated to optimize performance
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      }, options);

      this.observer.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
