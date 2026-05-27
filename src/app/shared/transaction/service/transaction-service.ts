import { HttpClient, HttpParams, httpResource, HttpResourceRequest } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { Transaction } from '../intafaces/transaction';

@Injectable({
    providedIn: 'root',
})
export class TransactionService {

    private httpClient = inject(HttpClient)

    getAll(searchTerm?: string) {

        let params = new HttpParams()

        if (searchTerm) {
            params = params.append('q', searchTerm)
        }

        return this.httpClient.get<Transaction[]>('/api/transactions', { params })
    }

    getAllWithHttpResource(searchTerm: Signal<string>) {
        return httpResource<Transaction[]>(() => {
            let params = new HttpParams()

            if (searchTerm) {
                params = params.append('q', searchTerm())
            }

            return {
                url: '/api/transactions',
                params,
            } as HttpResourceRequest
        }, {
            defaultValue: [],
        })
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
