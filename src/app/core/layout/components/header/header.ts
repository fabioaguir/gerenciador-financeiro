import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButton],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {



}
