import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { NgForm } from '@angular/forms';
import {
  FormBuilder,
  Validators,
  ControlContainer,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Booking } from 'src/app/commonClasses/booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  Booking = new Booking();
  minDate: any="";

  title: string = '';
  roomType = ['Delux', 'Super Delux', 'Super Delux AC', 'Suite'];

  constructor(private service: CommonServiceService, private router: Router) {}
  ngOnInit(): void {
    this.title = 'Book your stay';
    this.getDate();
  }
  checkAvailable() {
    this.service.storeBooking(this.Booking);
    this.router.navigate(['/roomCheck']);
  }

  getDate() {
    var date: any = new Date();
    var toDate: any = date.getDate();
    if (toDate < 10) {
      toDate = '0' + toDate;
    }

    var month: any = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }

    var year: any = date.getFullYear();
    this.minDate = year + '-' + month + '-' + toDate;
  }
}
