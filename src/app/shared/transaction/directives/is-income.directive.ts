import { Directive, effect, inject, input, ElementRef, Renderer2, booleanAttribute, ViewContainerRef, TemplateRef } from '@angular/core';
import { TransactionType } from '../enuns/transaction-type';


@Directive({
  selector: '[isIncome]'
})
export class IsIncomeDirective {

  templateRef = inject(TemplateRef);
  viewContainerRef = inject(ViewContainerRef);

  transactionType = input.required({ alias: 'isIncome' });

  elseTemplate = input<TemplateRef<any>>(undefined, { alias: 'isIncomeElse' });

  constructor() {
    effect(() => {
      if (this.transactionType() === TransactionType.INCOME) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        if (this.elseTemplate()) {
          this.viewContainerRef.createEmbeddedView(this.elseTemplate()!);
        } else {
          this.viewContainerRef.clear();
        }
      }
    });
  }

}

