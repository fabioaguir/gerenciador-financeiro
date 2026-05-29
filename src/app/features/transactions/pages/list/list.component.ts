import { ChangeDetectionStrategy, Component, computed, inject, input, linkedSignal, Signal, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { NoTransaction } from './components/no-transaction/no-transaction';
import { TransactionContainerComponent } from './components/transaction-container/transaction-container.component';
import { TransactionItem } from './components/transaction-item/transaction-item';
import { ConfirmationDialogService } from '@shared/dialog-confirmation/service/confirmation-dialog.service';
import { FeedBackService } from '@shared/service/feedback/feedback.service';
import { Transaction } from '@shared/transaction/intafaces/transaction';
import { TransactionService } from '@shared/transaction/service/transaction-service';
import { SearchComponent } from './components/search/search.component';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';
import { MatProgressBarModule } from '@angular/material/progress-bar';


function typeDelay(searchTerm: Signal<string>) {
  const observable = toObservable(searchTerm).pipe(debounceTime(500))
  return toSignal(observable, { initialValue: '' })
}

@Component({
  selector: 'app-list',
  imports: [TransactionItem,
    NoTransaction, MatAnchor, MatButtonModule,
    RouterLink, TransactionContainerComponent, SearchComponent, MatProgressBarModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  private transactionService = inject(TransactionService)
  private router = inject(Router)
  private feedbackService = inject(FeedBackService)
  dialog = inject(ConfirmationDialogService);
  private activatedRoute = inject(ActivatedRoute)

  searchTerm = signal<string>('')

  resourceRef = this.transactionService.getAllWithHttpResource(typeDelay(this.searchTerm))

  isLoading = computed(() => this.resourceRef.isLoading())
  transactions = computed(() => this.resourceRef.value())

  edit(transaction: Transaction) {
    this.router.navigate(['edit', transaction.id], { relativeTo: this.activatedRoute })
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
                this.resourceRef.update(transactions => transactions.filter(t => t.id !== transaction.id))
                this.feedbackService.success('Transação removida com sucesso!')
              }
            })
        };
      }
    })
  }
}
