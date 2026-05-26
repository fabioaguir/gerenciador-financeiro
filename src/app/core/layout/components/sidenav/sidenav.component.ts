import { Component, computed, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SidenavItemsComponent } from './components/sidenav-items/sidenav-items.component';
import { MobileLayoutService } from '@core/layout/services/mobile-layout.service';
import { SidenavVisibilityStore } from '@core/layout/stores/sidenav-visibility.store';

@Component({
  selector: 'app-sidenav',
  imports: [MatListModule, RouterModule, MatSidenavModule, SidenavItemsComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {

  private readonly mobileLayout = inject(MobileLayoutService);
  private readonly sidenavVisibilityStore = inject(SidenavVisibilityStore);

  isMobile = this.mobileLayout.isMobile();

  sidenavMode = computed(() => this.isMobile() ? 'over' : 'side');

  isSidenavOpened = computed(() => {
    if (!this.isMobile()) {
      return true;
    }

    return this.sidenavVisibilityStore.isVisible();
  });


}
