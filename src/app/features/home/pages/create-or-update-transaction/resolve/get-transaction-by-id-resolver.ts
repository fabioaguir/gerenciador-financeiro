import { ResolveFn } from '@angular/router';
import { TransactionService } from '../../../../../shared/transaction/service/transaction-service';
import { inject } from '@angular/core';
import { Transaction } from '../../../../../shared/transaction/intafaces/transaction';

export const getTransactionByIdResolver: ResolveFn<Transaction> = (route, state) => {
  
  const id = route.paramMap.get('id') as string

  return inject(TransactionService).getById(id);
};