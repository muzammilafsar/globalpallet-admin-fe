import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-userdeletedaddress',
  templateUrl: './userdeletedaddress.component.html',
  styleUrls: ['./userdeletedaddress.component.css']
})
export class UserdeletedaddressComponent implements OnInit {

  constructor(private Custom: CustomerService, private router: Router) { }

  ngOnInit() {
    this.Custom.getuserdeletedaddress();
  }

  get deleteddata() {
    return this.Custom.deleteddata['add'];
  }
}
