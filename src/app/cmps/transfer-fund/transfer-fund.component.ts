import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss'],
})
export class TransferFundComponent implements OnInit {
  @Input() contact: Contact;
  @Input() user: User;
  @Output() onSpendBalance = new EventEmitter<number>();

  amount: number;
  constructor() {}

  ngOnInit(): void {
    if (this.user.moves.length) {
      let movesToShow = this.user.moves.filter(
        (move) => move.to.name === this.contact.name
      );
      console.log('movesToShow :>>', movesToShow);
    }
  }

  onSaveMove() {
    console.log('this.amount', this.amount);
  }

  spendBalance() {
    this.onSpendBalance.emit(this.amount);
  }
}
