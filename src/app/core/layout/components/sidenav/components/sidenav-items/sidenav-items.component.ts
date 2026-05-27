import { Component, computed, inject, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';
import { LoggedInUserStoreService } from '@core/auth/stores/logged-in-user-store.service';
import { SidenavVisibilityStore } from '@core/layout/stores/sidenav-visibility.store';
import { LogoutDirective } from './directives/logout.directive';

@Component({
  selector: 'app-sidenav-items',
  imports: [MatListModule, RouterModule, LogoutDirective],
  templateUrl: './sidenav-items.component.html',
  styleUrl: './sidenav-items.component.scss',
})
export class SidenavItemsComponent {

  private readonly loggedInUserStore = inject(LoggedInUserStoreService);
  private readonly sidenavVisibilityStore = inject(SidenavVisibilityStore);

  links = signal([
    { label: 'home', url: '/' },
    { label: 'transações', url: '/transactions' },
  ]);

  loggedInUser = computed(() => this.loggedInUserStore.isLoggedIn());


  closeSidenav() {
    return this.sidenavVisibilityStore.close();
  }
}
