import { Component, computed, input, linkedSignal } from '@angular/core';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Transaction } from '@shared/transaction/intafaces/transaction';
import { Balance } from './components/balance/balance';
import { PieChartComponent } from './components/pipe-chart/pie-chart.component';
import { sumTransactions } from '@shared/transaction/functions/sum-transactions';
import { TransactionType } from '@shared/transaction/enuns/transaction-type';

@Component({
  selector: 'app-home',
  imports: [Balance, PieChartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  transactions = input.required<Transaction[]>()


  totalIncome = computed(() => {
    return sumTransactions(this.transactions(), TransactionType.INCOME);
  });

  totalOutcome = computed(() => {
    return sumTransactions(this.transactions(), TransactionType.OUTCOME);
  });

  chartConfig = computed(() => {
    return {
      labels: ['Ganhos', 'Despesas'],
      dataLabel: 'Valor total',
      data: [this.totalIncome(), this.totalOutcome()]
    }
  })
}
