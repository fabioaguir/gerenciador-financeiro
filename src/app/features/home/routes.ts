import { Routes } from "@angular/router";
import { Home } from "./home";
import { CreateTransactionComponent } from "./pages/create/create-transaction/create-transaction.component";

export default <Routes> [
    {
        path: '',
        component: Home
    },
    {
        path: 'create',
        component: CreateTransactionComponent
    }
]