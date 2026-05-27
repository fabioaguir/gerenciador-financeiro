import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { getTransactionsResolver } from "./resolver/get-transactions-resolver";

export default <Routes>[
    {
        path: '',
        component: HomeComponent,
        resolve: {
            transactions: getTransactionsResolver
        }
    },
]