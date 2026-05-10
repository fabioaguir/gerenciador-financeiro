import { Component, contentChild, input, TemplateRef } from '@angular/core';
import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import { Transaction } from '../../../../../../shared/transaction/intafaces/transaction';

@Component({
  selector: 'app-transaction-container',
  imports: [NgTemplateOutlet],
  templateUrl: './transaction-container.component.html',
  styleUrl: './transaction-container.component.scss',
})
export class TransactionContainerComponent {

  transactions = input.required<Transaction[]>()

  itensTemplate = contentChild.required<TemplateRef<unknown>>('item')
  noItemTemplate = contentChild.required<TemplateRef<unknown>>('noItem')

}
