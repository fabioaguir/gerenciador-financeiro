import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MobileLayoutService } from '@core/layout/services/mobile-layout.service';
import { SidenavVisibilityStore } from '@core/layout/stores/sidenav-visibility.store';

@Component({
  selector: 'app-toggle-sidevav-menu',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './toggle-sidevav-menu.component.html',
  styleUrl: './toggle-sidevav-menu.component.scss',
})
export class ToggleSidevavMenuComponent {

  private readonly sidenavVisibilityStore = inject(SidenavVisibilityStore);
  private readonly mobileLayout = inject(MobileLayoutService);

  isMobile = this.mobileLayout.isMobile();

  toggleSidenav() {
    this.sidenavVisibilityStore.toggle();
  }


}
