import { TransactionType } from "../enuns/transaction-type";
import { Transaction } from "../intafaces/transaction";

export function sumTransactions(transactions: Transaction[], trasactionType: TransactionType) {
    return transactions
        .filter(transaction => transaction.type === trasactionType)
        .reduce((total, transaction) => total + transaction.value, 0);
}