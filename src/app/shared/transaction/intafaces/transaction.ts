import { TransactionType } from "../enuns/transaction-type";


export interface Transaction {
    id: number;
    title: string;
    value: number;
    type: TransactionType;
}