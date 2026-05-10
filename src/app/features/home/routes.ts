import { Routes } from "@angular/router";
import { CreateOrUpdateTransactionComponent } from "./pages/create-or-update-transaction/create-or-update-transaction.component";
import { getTransactionByIdResolver } from "./pages/create-or-update-transaction/resolve/get-transaction-by-id-resolver";
import { ListComponent } from "./pages/list/list.component";
import { getTransactionsResolver } from "./pages/list/resolver/get-transactions-resolver";

export default <Routes>[
    {
        path: '',
        component: ListComponent,
        resolve: {
            transactions: getTransactionsResolver
        }
    },
    {
        path: 'create',
        component: CreateOrUpdateTransactionComponent
    },
    {
        path: 'edit/:id',
        component: CreateOrUpdateTransactionComponent,
        resolve: {
            transaction: getTransactionByIdResolver
        }
    }
]