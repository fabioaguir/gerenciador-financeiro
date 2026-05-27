import { Routes } from "@angular/router";
import { CreateOrUpdateTransactionComponent } from "./pages/create-or-update-transaction/create-or-update-transaction.component";
import { getTransactionByIdResolver } from "./pages/create-or-update-transaction/resolve/get-transaction-by-id-resolver";
import { ListComponent } from "./pages/list/list.component";

export default <Routes>[
    {
        path: '',
        component: ListComponent,
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