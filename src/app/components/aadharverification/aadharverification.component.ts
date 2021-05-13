import { Component, OnInit } from '@angular/core';
import { User } from '../../commonClasses/user';

@Component({
  selector: 'app-aadharverification',
  templateUrl: './aadharverification.component.html',
  styleUrls: ['./aadharverification.component.css']
})
export class AadharverificationComponent implements OnInit {
  user=new User();
  constructor() { }

  ngOnInit(): void {
  }

}
