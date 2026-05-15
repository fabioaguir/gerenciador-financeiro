import { Directive, effect, inject, input, ElementRef, Renderer2, booleanAttribute, computed } from '@angular/core';


@Directive({
  selector: '[appMarginBottom]'
})
export class MarginBottomDirective {

  elementRef = inject(ElementRef);
  render2 = inject(Renderer2);

  appMarginBottom = input(undefined, {
    alias: 'appMarginBottom'
  });

  resolver = computed(() => this.appMarginBottom() || '24px');

  constructor() {
    effect(() => {
      if (this.resolver()) {
        this.render2.setStyle(this.elementRef.nativeElement, "margin-bottom", this.resolver());
      }
    });
  }

}
