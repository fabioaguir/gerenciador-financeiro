import { Directive, effect, inject, input, ElementRef, Renderer2 } from '@angular/core';


type ColorType = 'error';

@Directive({
  selector: '[matButton]'
})
export class CustomColorDirective {

  elementRef = inject(ElementRef);
  render2 = inject(Renderer2);

  color = input<ColorType>(undefined, { alias: 'matButtonColor' });

  constructor() {
    effect(() => {
      if (this.color()) {

        this.render2.addClass(this.elementRef.nativeElement, `button-${this.color()}`);
      }
    });
  }

}
