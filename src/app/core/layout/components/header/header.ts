import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { LogoutFacadeService } from '../../../auth/facades/logout-facade.service';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButton],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  logoutFacade = inject(LogoutFacadeService);
  router = inject(Router);

  onLogout() {
    this.logoutFacade.logout().subscribe({
      next: () => { this.router.navigate(['/auth/login']) },
    });
  }
}
