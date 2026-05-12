import { Routes } from '@angular/router';
import { isAutenticatedGuard } from './core/auth/guards/is-autenticated-guard';

export const routes: Routes = [
    {
        path: '',
        canActivate: [isAutenticatedGuard],
        loadComponent: () => import('./core/layout/layout').then(m => m.Layout),
        children: [
            {
                path: '',
                loadChildren: () => import('./features/home/routes')
            }
        ]
    },
    {
        path: 'auth',
        loadChildren: () => import('./core/auth/pages/login/routes')
    }
];
