import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from "@angular/router";
import { Header } from './components/header/header';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-layout',
  imports: [Header, RouterOutlet, MatSidenavModule, SidenavComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
