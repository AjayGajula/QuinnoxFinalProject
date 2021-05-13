import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {
  title: string;
  amount: number;
  cardHolder: string;
  cardNumber: number;
  cardExpiry: string;
  cardCVV: number;
  constructor() { 
    this.title = "Add money to wallet"
  }

  ngOnInit(): void {
  }
  addMoney() {
    alert(this.amount)
  }

}
