import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Transaction } from '@shared/transaction/intafaces/transaction';
import { TransactionService } from '@shared/transaction/service/transaction-service';

export const getTransactionsResolver: ResolveFn<Transaction[]> = (route, state) => {

  const transactionService = inject(TransactionService)

  return transactionService.getAll()
};
