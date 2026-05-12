import { Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import { LayoutComponent } from "../../components/layout/layout.component";


export default <Routes>[
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
        ]
    }

] as Routes;