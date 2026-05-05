import { Component, signal } from '@angular/core';
import { Balance } from "./components/balance/balance";
import { TransactionItem } from "./components/transaction-item/transaction-item";
import { Transaction } from '../../shared/transaction/intafaces/transaction';
import { TransactionType } from '../../shared/transaction/enuns/transaction-type';

@Component({
  selector: 'app-home',
  imports: [Balance, TransactionItem],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  transactions = signal<Transaction[]>([
    {
      value: 100, type: TransactionType.INCOME,
      title: 'Salário'
    },
    {
      value: 50, type: TransactionType.OUTCOME,
      title: 'Aluguel'
    },
    {
      value: 50, type: TransactionType.INCOME,
      title: 'Freelance'
    },
    {
      value: 100, type: TransactionType.OUTCOME,
      title: 'Compras'
    },
  ])
}
