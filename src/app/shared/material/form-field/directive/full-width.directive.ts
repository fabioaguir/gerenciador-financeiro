import { Directive, effect, inject, input, ElementRef, Renderer2, booleanAttribute } from '@angular/core';


@Directive({
  selector: '[aooFullWidth]'
})
export class FullWidthDirective {

  elementRef = inject(ElementRef);
  render2 = inject(Renderer2);

  appFullWidth = input(true, { transform: booleanAttribute, alias: 'aooFullWidth' });

  constructor() {
    effect(() => {
      if (this.appFullWidth()) {
        this.render2.setStyle(this.elementRef.nativeElement, "width", "100%");
      }
    });
  }

}
