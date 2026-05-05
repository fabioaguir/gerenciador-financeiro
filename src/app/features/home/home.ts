import { Component, signal, inject, OnInit } from '@angular/core';
import { Balance } from "./components/balance/balance";
import { TransactionItem } from "./components/transaction-item/transaction-item";
import { Transaction } from '../../shared/transaction/intafaces/transaction';
import { NoTransaction } from "./components/no-transaction/no-transaction";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [Balance, TransactionItem, NoTransaction],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  
  private httpClient = inject(HttpClient)
  
  transactions = signal<Transaction[]>([])
  
  ngOnInit(): void {
    this.getTransactions()
  }

  private getTransactions() {
    this.httpClient.get<Transaction[]>('http://localhost:3000/transactions')
      .subscribe(transactions => this.transactions.set(transactions))}
}
