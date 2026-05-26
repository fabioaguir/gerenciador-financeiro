import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToggleSidevavMenuComponent } from './components/toggle-sidevav-menu/toggle-sidevav-menu.component';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, ToggleSidevavMenuComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
