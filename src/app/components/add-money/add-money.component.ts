import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  addMoney(addMoneyForm:NgForm) {
    alert(addMoneyForm.value.amount);
  }

}
