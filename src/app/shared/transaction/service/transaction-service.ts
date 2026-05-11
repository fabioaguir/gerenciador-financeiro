import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Transaction } from '../intafaces/transaction';

@Injectable({
    providedIn: 'root',
})
export class TransactionService {

    private httpClient = inject(HttpClient)

    getAll() {
        return this.httpClient.get<Transaction[]>('/api/transactions')
    }

    getById(id: string) {
        return this.httpClient.get<Transaction>(`/api/transactions/${id}`)
    }

    create(transaction: Omit<Transaction, 'id'>) {
        return this.httpClient.post<Transaction>('/api/transactions', transaction)
    }

    update(id: string, transaction: Partial<Transaction>) {
        return this.httpClient.put<Transaction>(`/api/transactions/${id}`, transaction)
    }

    remove(id: string) {
        return this.httpClient.delete(`/api/transactions/${id}`)
    }
}
