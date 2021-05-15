import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hotel Management System';
  loggedIn=false;
  adminLoggedIn=false;//------------- must change
  redirectedFromForgetPassword=false;
  redirectedFromForgetPasswordOTP:any;

  constructor(private router: Router){}
  ngOnInit(): void {
    if(!this.loggedIn || this.adminLoggedIn){
      this.router.navigate(["/login"])
    }
  }
  logout(){
    this.loggedIn=false;
    this.adminLoggedIn=false;
    this.router.navigate(['/login']);
  }
}
