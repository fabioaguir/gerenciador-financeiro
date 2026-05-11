import { Component, computed, inject, input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { Router } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';
import { FeedBackService } from '@shared/service/feedback/feedback.service';
import { TransactionType } from '@shared/transaction/enuns/transaction-type';
import { Transaction } from '@shared/transaction/intafaces/transaction';
import { TransactionService } from '@shared/transaction/service/transaction-service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-create-transaction',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    NgxMaskDirective,
  ],
  templateUrl: './create-or-update-transaction.component.html',
  styleUrl: './create-or-update-transaction.component.scss',
})
export class CreateOrUpdateTransactionComponent {
  private transactionService = inject(TransactionService)
  private router = inject(Router)
  private feedbackService = inject(FeedBackService)

  transaction = input<Transaction>();

  readonly typeTransaction = TransactionType;

  form = computed(() => new FormGroup({
    type: new FormControl(this.transaction()?.type ?? '', [Validators.required]),
    title: new FormControl(this.transaction()?.title ?? '', [Validators.required]),
    value: new FormControl(this.transaction()?.value ?? 0, [Validators.required]),
  }));

  isEdit = computed(() => !!this.transaction());

  onSubmit() {

    if (this.form().invalid) {
      return
    }

    const formValue = {
      title: this.form().value.title as string,
      value: this.form().value.value as number,
      type: this.form().value.type as TransactionType
    } as Transaction

    this.createOrUpdate(formValue)?.subscribe({
      next: (response) => {
        this.router.navigate(['/']);
      }
    })
  }

  createOrUpdate(transaction: Transaction) {
    if (this.isEdit()) {
      return this.transactionService.update(this.transaction()!.id.toString(), transaction)
        .pipe(tap(() => {
          this.feedbackService.success('Transação atualizada com sucesso!');
        }))

    } else {
      return this.transactionService.create(transaction)
        .pipe(tap(() => {
          this.feedbackService.success('Transação criada com sucesso!');
        }))
    }
  }
}

