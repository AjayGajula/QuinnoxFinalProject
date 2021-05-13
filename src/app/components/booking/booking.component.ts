import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { NgForm } from '@angular/forms';
import { FormBuilder, Validators, ControlContainer, FormGroup, FormControl } from '@angular/forms';
import { Booking } from 'src/app/commonClasses/booking';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  Booking = new Booking();

  title: string='';
  roomType = ['Deluxe', 'Super Deluxe',
    'Super Deluxe AC', 'Suite'];

  constructor(private service: CommonServiceService, private router: Router) { }
  ngOnInit(): void {
    this.title = "Book your stay"
  }
  checkAvailable(bookingForm : NgForm) {
    this.service.shareBooking(bookingForm.value)
    this.router.navigate(['/availableRooms'])
  }
  
}