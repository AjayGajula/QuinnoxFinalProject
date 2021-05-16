import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environments/environment';
import { ApiService } from '../../services/api.service';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.component.html',
  styleUrls: ['./otpverification.component.css'],
})
export class OtpverificationComponent implements OnInit {
  msg: string;
  status: boolean;
  constructor(
    private service: ApiService,
    private commonService: CommonServiceService,
    private router: Router,
    private redirectService: AppComponent
  ) {}
  otpData = {
    account_sid: '', //add your sid
    auth_token: '', // auth_token
    sender: '+', //sender
    reciever: '+', //verified number
    eventtype: 'phnumverify',
  };
  otpData1 = {
    account_sid: '', //add your sid
    auth_token: '', // auth_token
    sender: '+', //sender
    reciever: '+', //verified number
    eventtype: 'forgotpwd',
  };

  ngOnInit(): void {
    console.log(this.redirectService.redirectedFromForgetPassword);

    if (this.redirectService.redirectedFromForgetPassword == true) {
      this.checkOtp(this.otpData1);
    } else {
      this.checkOtp(this.otpData);
    }
  }

  otp: any;
  otpReceived: any;
  authComplete() {
    if (this.redirectService.redirectedFromForgetPassword == true) {
      this.redirectService.redirectedFromForgetPassword = false;

      if (this.otpReceived == this.otp) {
        this.msg = '';
        this.router.navigate(['/changePassword']);
      } else {
        this.msg = 'Invalid otp enter again';
      }
    } else {
      if (this.otpReceived == this.otp) {
        this.msg = '';
        this.service.createUser(this.commonService.user).then(
          (postData) => {
            this.router.navigate(['/login']);
          },
          (error) => {
            console.log('exception occured');
          }
        );
      } else {
        this.msg = 'Invalid otp enter again';
      }
    }
  }
  checkOtp(data: any) {
    this.service.getOtp(data).then(
      (success) => {
        this.otpReceived = success;
      },
      (error) => console.log(error)
    );
  }
}
