import { Directive, effect, inject, input, ElementRef, Renderer2, booleanAttribute } from '@angular/core';
import { FullWidthDirective } from './full-width.directive';
import { MarginBottomDirective } from './margin-bottom.directive';


@Directive({
  selector: 'mat-form-field',
  hostDirectives: [
    {
      directive: FullWidthDirective,
      inputs: ['appFullWidth']
    },
    {
      directive: MarginBottomDirective,
      inputs: ['appMarginBottom: mb']
    }
  ]
})
export class CustomFormFieldDirective { }
