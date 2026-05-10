import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { TransactionService } from '../../../../../shared/transaction/service/transaction-service';
import { Transaction } from '../../../../../shared/transaction/intafaces/transaction';

export const getTransactionsResolver: ResolveFn<Transaction[]> = (route, state) => {

  const transactionService = inject(TransactionService)

  return transactionService.getAll()
};
