import { Component, inject } from '@angular/core';
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

import { TransactionType } from '../../../../../shared/transaction/enuns/transaction-type';
import { NgxMaskDirective } from 'ngx-mask';
import { JsonPipe } from '@angular/common';
import { TransactionService } from '../../../../../shared/transaction/service/transaction-service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeedBackService } from '../../../../../shared/service/feedback/feedback.service';

@Component({
  selector: 'app-create-transaction',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    NgxMaskDirective,
    JsonPipe
  ],
  templateUrl: './create-transaction.component.html',
  styleUrl: './create-transaction.component.scss',
})
export class CreateTransactionComponent {
  private transactionService = inject(TransactionService)
  private router = inject(Router)
  private feedbackService = inject(FeedBackService);

  readonly typeTransaction = TransactionType;

  form = new FormGroup({
    type: new FormControl('income', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    value: new FormControl(0, [Validators.required]),
  });

  onSubmit() {

    const formValue = {
      title: this.form.value.title as string,
      value: this.form.value.value as number,
      type: this.form.value.type as TransactionType
    }

    if (this.form.valid) {
      this.transactionService.create(formValue)
        .subscribe({
          next: (response) => {
            this.feedbackService.success('Transação criada com sucesso!');
            this.router.navigate(['/']);
          }
        })
    } else {
      this.form.markAllAsTouched()
    }  
  }
}
