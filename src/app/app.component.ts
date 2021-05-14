import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hotel Management System';
  loggedIn=false;
  adminLoggedIn=false;//------------- must change
  ngOnInit(): void {}
  logout(){
    this.loggedIn=false;
    this.adminLoggedIn=false;
  }
}
