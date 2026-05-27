import { CurrencyPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HumanizeCurrencyPipe } from '../../pipe/humanize-currency-pipe';

type BalanceCardType = 'income' | 'outcome' | 'balance';

enum ValueCssClass {
  income = 'income',
  outcome = 'outcome',
}

@Component({
  selector: 'app-balance-card',
  imports: [MatCardModule, HumanizeCurrencyPipe],
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
        if (this.value() > 0) {
          return ValueCssClass.income;
        } else if (this.value() < 0) {
          return ValueCssClass.outcome;
        } else {
          return 'zero' as ValueCssClass; // Assuming you have a CSS class for zero balance
        }
    }
  })
}