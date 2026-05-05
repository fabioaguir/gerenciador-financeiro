import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

type BalanceCardType = 'income' | 'outcome' | 'balance';

enum ValueCssClass {
  income = 'income',
  outcome = 'outcome',
}

@Component({
  selector: 'app-balance-card',
  imports: [MatCardModule],
  templateUrl: './balance-card.html',
  styleUrl: './balance-card.scss',
})
export class BalanceCard {
  type = input.required<BalanceCardType>()
  label = input.required<string>()
  value = input.required<number>()

  cssClass = computed<ValueCssClass>(() => {
    switch (this.type()) {
      case 'income':
        return ValueCssClass.income;
      case 'outcome':
        return ValueCssClass.outcome;
      case 'balance':
        return this.value() > 0 ? ValueCssClass.income : ValueCssClass.outcome;
    }
  })
}