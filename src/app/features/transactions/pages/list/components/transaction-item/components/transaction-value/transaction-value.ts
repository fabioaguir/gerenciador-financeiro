import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TransactionType } from '@shared/transaction/enuns/transaction-type';
import { Transaction } from '@shared/transaction/intafaces/transaction';
import { CurrencyPipe } from '@angular/common';


const CssClass = {
  [TransactionType.INCOME]: 'income',
  [TransactionType.OUTCOME]: 'outcome',
}

@Component({
  selector: 'app-transaction-value',
  imports: [CurrencyPipe],
  styleUrl: './transaction-value.scss',
  host: {
    '[class]': 'cssClass()'
  },
  template: `{{ transaction().value | currency}}`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionValue {

  transaction = input.required<Transaction>()

  cssClass = computed(() => {
    return CssClass[this.transaction().type]
  })
}
