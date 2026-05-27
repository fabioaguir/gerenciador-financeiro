import { Component, computed, input } from '@angular/core';
import { Transaction } from '@shared/transaction/intafaces/transaction';
import { BalanceCard } from './components/balance-card/balance-card';

@Component({
  selector: 'app-balance',
  imports: [BalanceCard],
  templateUrl: './balance.html',
  styleUrl: './balance.scss',
})
export class Balance {

  transactions = input.required<Transaction[]>()

  totalIncome = computed(() => {
    return this.transactions().reduce((acc, transaction) => {
      if (transaction.type === 'income') {
        return acc + transaction.value;
      }
      return acc;
    }, 0);
  });

  totalOutcome = computed(() => {
    return this.transactions().reduce((acc, transaction) => {
      if (transaction.type === 'outcome') {
        return acc + transaction.value;
      }
      return acc;
    }, 0);
  });

  totalBalance = computed(() => {
    return this.totalIncome() - this.totalOutcome();
  })
}
