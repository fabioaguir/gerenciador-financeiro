import { Component, input, linkedSignal } from '@angular/core';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Transaction } from '@shared/transaction/intafaces/transaction';
import { Balance } from './components/balance/balance';

@Component({
  selector: 'app-home',
  imports: [Balance],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  transactions = input.required<Transaction[]>()
}
