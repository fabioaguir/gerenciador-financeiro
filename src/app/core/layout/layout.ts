import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { RouterModule, RouterOutlet } from "@angular/router";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidenavItems } from './components/sidenav-items/sidenav-items';

@Component({
  selector: 'app-layout',
  imports: [Header, RouterOutlet, MatSidenavModule, SidenavItems],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
