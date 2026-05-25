import { Component, computed, inject, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { LogoutFacadeService } from '../../../auth/facades/logout-facade.service';
import { LoggedInUserStoreService } from '../../../auth/stores/logged-in-user-store.service';
import { LogoutDirective } from './directives/logout.directive';

@Component({
  selector: 'app-sidenav-items',
  imports: [MatListModule, RouterModule, LogoutDirective],
  templateUrl: './sidenav-items.html',
  styleUrl: './sidenav-items.scss',
})
export class SidenavItems {

  private readonly logoutFacade = inject(LogoutFacadeService);
  private readonly router = inject(Router);
  private readonly loggedInUserStore = inject(LoggedInUserStoreService);

  links = signal([
    { label: 'home', url: '/' },
  ]);

  loggedInUser = computed(() => this.loggedInUserStore.isLoggedIn());

  onLogout() {
    this.logoutFacade.logout().subscribe({
      next: () => { this.router.navigate(['/auth/login']) },
    });
  }
}
