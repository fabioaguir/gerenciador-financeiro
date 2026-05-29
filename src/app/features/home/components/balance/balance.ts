import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Transaction } from '@shared/transaction/intafaces/transaction';
import { BalanceCard } from './components/balance-card/balance-card';
import { sumTransactions } from '@shared/transaction/functions/sum-transactions';
import { TransactionType } from '@shared/transaction/enuns/transaction-type';

@Component({
  selector: 'app-balance',
  imports: [BalanceCard],
  templateUrl: './balance.html',
  styleUrl: './balance.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Balance {

  transactions = input.required<Transaction[]>()

  totalIncome = computed(() => {
    return sumTransactions(this.transactions(), TransactionType.INCOME);
  });

  totalOutcome = computed(() => {
    return sumTransactions(this.transactions(), TransactionType.OUTCOME);
  });

  totalBalance = computed(() => {
    return this.totalIncome() - this.totalOutcome();
  })
}
