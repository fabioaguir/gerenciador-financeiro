import { Routes } from "@angular/router";
import { Home } from "./home";
import { CreateOrUpdateTransactionComponent } from "./pages/create-or-update-transaction/create-or-update-transaction.component";
import { getTransactionByIdResolver } from "./pages/create-or-update-transaction/resolve/get-transaction-by-id-resolver";

export default <Routes> [
    {
        path: '',
        component: Home
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