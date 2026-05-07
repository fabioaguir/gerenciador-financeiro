import { Component, signal, inject, OnInit } from '@angular/core';
import { Balance } from "./components/balance/balance";
import { TransactionItem } from "./components/transaction-item/transaction-item";
import { Transaction } from '../../shared/transaction/intafaces/transaction';
import { NoTransaction } from "./components/no-transaction/no-transaction";
import { HttpClient } from '@angular/common/http';
import { TransactionService } from '../../shared/transaction/service/transaction-service';
import { MatAnchor, MatButtonModule } from "@angular/material/button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Balance, TransactionItem, NoTransaction, MatAnchor, MatButtonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  
  private transactionService = inject(TransactionService)
  
  transactions = signal<Transaction[]>([])
  
  ngOnInit(): void {
    this.getTransactions()
  }

  private getTransactions() {
    this.transactionService.getAll()
      .subscribe({
        next: (transactions) => this.transactions.set(transactions)
      })}
}
