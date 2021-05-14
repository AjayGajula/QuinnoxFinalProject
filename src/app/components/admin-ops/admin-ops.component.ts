import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-ops',
  templateUrl: './admin-ops.component.html',
  styleUrls: ['./admin-ops.component.css']
})
export class AdminOpsComponent implements OnInit {
  constructor(private service: ApiService, private datePipe: DatePipe) {}
  currentDay: any;
  upcomingBookings: any;
  totalBookings: any;
  activeBookings: any;
  totalCostToday = 0;
  totalCostOverall = 0;
  ngOnInit(): void {
    this.service.getBookings().subscribe(
      res =>
        (this.currentDay = res.filter(item => {
          var isTodayActive =
            item.currentStatus === true &&
            this.currentDate(item.bookedFrom, item.bookedTo, 'today');
          if (isTodayActive) {
            this.totalCostToday = this.totalCostToday + item.costPerDay;
          }
          return isTodayActive;
        }))
    );
    this.service.getBookings().subscribe(
      res =>
        (this.upcomingBookings = res.filter(item => {
          var isTodayActive =
            item.currentStatus === true &&
            this.currentDate(item.bookedFrom, item.bookedTo, 'upcoming');
          return isTodayActive;
        }))
    );
    this.service.getBookings().subscribe(
      res =>
        (this.activeBookings = res.filter(item => {
          if (item.currentStatus === true) {
            this.totalCostOverall =
              this.totalCostOverall + item.costPerDay * item.bookedDays;
          }
          return item.currentStatus === true;
        }))
    );
    this.service.getBookings().subscribe(res => (this.totalBookings = res));
  }
  currentDate(dateStrFrom, dateStrTo, status) {
    let fromDate = this.datePipe.transform(dateStrFrom, 'yyyy-MM-dd');
    let toDate = this.datePipe.transform(dateStrTo, 'yyyy-MM-dd');
    let currDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    if (status === 'today') {
      return fromDate <= currDate && toDate >= currDate;
    } else {
      return fromDate > currDate;
    }
  }
  roomPost =
  // {
    //   id: '301',
    //   roomType: 'Suite',
    //   cost: 2000,
    //   capacity: 3,
    //   bookings: [
    //     { bookingStatus: true, bookingFrom: "2021-05-15", bookingTo: "2021-05-17", uId: "smith@gmail.com" }
    //   ]
    // };
    {
      id: 'b2',
      uId: 'smith@gmail.com',
      rId: '301',
      bookedDays: 3,
      bookedFrom: '2021-05-15',
      bookedTo: '2021-05-17',
      costPerDay: 2000,
      currentStatus: true
    };
  postData() {
    // this.service.createRoom(this.roomPost);
    // this.service.delBookById("b1621004789972");
    this.service.addBooking(this.roomPost);
  }
}
