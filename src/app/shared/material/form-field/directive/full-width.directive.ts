import { Directive, effect, inject, input, ElementRef, Renderer2, booleanAttribute } from '@angular/core';


@Directive({
  selector: '[appFullWidth]'
})
export class FullWidthDirective {

  elementRef = inject(ElementRef);
  render2 = inject(Renderer2);

  appFullWidth = input(true, { transform: booleanAttribute, alias: 'appFullWidth' });

  constructor() {
    effect(() => {
      if (this.appFullWidth()) {
        this.render2.setStyle(this.elementRef.nativeElement, "width", "100%");
      }
    });
  }

}
