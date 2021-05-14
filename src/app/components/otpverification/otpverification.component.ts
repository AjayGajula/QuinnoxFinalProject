import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.component.html',
  styleUrls: ['./otpverification.component.css'],
})
export class OtpverificationComponent implements OnInit {
  constructor(private service: ApiService, private commonService: CommonServiceService, private router: Router){}

  ngOnInit(): void {}
  otp = new Array<number>(6)
  authComplete(){
    this.service.createUser(this.commonService.user).then(
      (postData) => {
        console.log(postData);
        console.log(this.commonService.user)
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log('exception occured');
      }
    );
  }
}
