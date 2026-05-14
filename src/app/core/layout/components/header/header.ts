import { Component, computed, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { LogoutFacadeService } from '../../../auth/facades/logout-facade.service';
import { LoggedInUserStoreService } from '../../../auth/stores/logged-in-user-store.service';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButton],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  private readonly logoutFacade = inject(LogoutFacadeService);
  private readonly router = inject(Router);
  private readonly loggedInUserStore = inject(LoggedInUserStoreService);

  loggedInUser = computed(() => this.loggedInUserStore.isLoggedIn());

  onLogout() {
    this.logoutFacade.logout().subscribe({
      next: () => { this.router.navigate(['/auth/login']) },
    });
  }
}
