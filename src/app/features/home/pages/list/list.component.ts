import { Component, inject, input, linkedSignal, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ConfirmationDialogService } from '../../../../shared/dialog-confirmation/service/confirmation-dialog.service';
import { FeedBackService } from '../../../../shared/service/feedback/feedback.service';
import { Transaction } from '../../../../shared/transaction/intafaces/transaction';
import { TransactionService } from '../../../../shared/transaction/service/transaction-service';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { NoTransaction } from './components/no-transaction/no-transaction';
import { Balance } from './components/balance/balance';
import { TransactionContainerComponent } from './components/transaction-container/transaction-container.component';
import { TransactionItem } from './components/transaction-item/transaction-item';

@Component({
  selector: 'app-list',
  imports: [Balance, TransactionItem,
    NoTransaction, MatAnchor, MatButtonModule,
    RouterLink, TransactionContainerComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  private transactionService = inject(TransactionService)
  private router = inject(Router)
  private feedbackService = inject(FeedBackService)
  dialog = inject(ConfirmationDialogService);

  transactions = input.required<Transaction[]>()
  items = linkedSignal<Transaction[]>(() => this.transactions())

  edit(transaction: Transaction) {
    this.router.navigate(['edit', transaction.id])
  }

  remove(transaction: Transaction) {

    this.dialog.open({
      title: 'Deletar transação',
      message: 'Você realmente deseja deletar esta transação?',
    }).subscribe({
      next: (result) => {
        if (result) {
          this.transactionService.remove(transaction.id.toString())
            .subscribe({
              next: () => {
                this.items.update(transactions => transactions.filter(t => t.id !== transaction.id))
                this.feedbackService.success('Transação removida com sucesso!')
              }
            })
        };
      }
    })
  }
}
