import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  name: string = "undefined";
  Email= 'sample';
  noOfRoom = 4;
  noOfGuest = 4;
  totalAmount:number=0;
  cost : number=1000;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.totalAmount = this.noOfRoom*this.cost;
  }
  completeBooking(){
    this.router.navigate(['/myBooking'])
  }
  cancelBooking(){
    this.router.navigate(['/book'])
  }
}
