import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-otphistory',
  templateUrl: './otphistory.component.html',
  styleUrls: ['./otphistory.component.css']
})
export class OtphistoryComponent implements OnInit {

  constructor(private Custom: CustomerService, private router: Router) { }

  ngOnInit() {
    this.Custom.getotphistory();
  }

  get otpdata() {
    return this.Custom.otpdata;
  }

}
