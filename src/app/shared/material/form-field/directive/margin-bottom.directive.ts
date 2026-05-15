import { Directive, effect, inject, input, ElementRef, Renderer2, booleanAttribute } from '@angular/core';


@Directive({
  selector: '[appMarginBottom]'
})
export class MarginBottomDirective {

  elementRef = inject(ElementRef);
  render2 = inject(Renderer2);

  appMarginBottom = input('', {
    transform: (value: string) => value = value || '24px',
    alias: 'appMarginBottom'
  }
  );

  constructor() {
    effect(() => {
      if (this.appMarginBottom()) {
        this.render2.setStyle(this.elementRef.nativeElement, "margin-bottom", this.appMarginBottom());
      }
    });
  }

}
