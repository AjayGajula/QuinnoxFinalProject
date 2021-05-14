import { Component, OnInit } from '@angular/core';
import { User } from '../../commonClasses/user';
import { Router } from '@angular/router';
import { CommonServiceService } from '../../services/common-service.service';

@Component({
  selector: 'app-aadharverification',
  templateUrl: './aadharverification.component.html',
  styleUrls: ['./aadharverification.component.css']
})
export class AadharverificationComponent implements OnInit {
  user=new User();
  constructor(private router: Router, private commonService: CommonServiceService) { }
  ngOnInit(): void {
    this.user=this.commonService.user;
  }
  
  aadharSubmit(){
    this.commonService.storeUser(this.user);
    
    this.router.navigate(['/otpverification']);
  }
}
