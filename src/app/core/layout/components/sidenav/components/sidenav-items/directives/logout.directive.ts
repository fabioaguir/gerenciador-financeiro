import { Directive, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutFacadeService } from '@core/auth/facades/logout-facade.service';


@Directive({
    selector: '[logout]',
    host: {
        '(click)': 'onLogout()'
    }
})
export class LogoutDirective {
    private readonly logoutFacade = inject(LogoutFacadeService);
    private readonly router = inject(Router);

    onLogout() {
        this.logoutFacade.logout().subscribe({
            next: () => { this.router.navigate(['/auth/login']) },
        });
    }
}

