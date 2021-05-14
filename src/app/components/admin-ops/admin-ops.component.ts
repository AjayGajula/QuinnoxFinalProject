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
  //   data={
  //       "id": "305",
  //       "roomType": "Super Delux",
  //       "cost": 1000,
  //       "capacity": 2,
  //       "bookings": [{
  //           "bookingStatus": true,
  //           "bookingFrom": "2021-05-15",
  //           "bookingTo": "2021-05-15",
  //           "uId":"virat@gmail.com"
  //       }]
  // }
  data = {
    id: 'b3',
    uId: 'jhony@gmail.com',
    rId: '302',
    currentStatus: false,
    bookedDays: 2,
    bookedFrom: '2021-05-14',
    bookedTo: '2021-05-15',
    costPerDay: 800
  };
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
  posting() {
    // this.service.getBookings().subscribe(
    //   data=>{

    //   }
    // )
    this.service.addBooking(this.data).then(res => console.log(res));
    // this.service.delRoomById('b5');
  }
}
