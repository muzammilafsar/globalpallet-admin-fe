import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-dailyreport',
  templateUrl: './dailyreport.component.html',
  styleUrls: ['./dailyreport.component.css']
})
export class DailyreportComponent implements OnInit {

  dailyreport = [];
  name = '';
  type = '';
  own = false;
  emp = false;
  del = false;

  constructor(private api: ApiService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.getdailyreport();
    const admin = this.authService.getAdminDetail();
    this.name = admin.name;
    this.type = admin.type;
    this.own = admin.owner;
    this.emp = admin.employee;
    this.del = admin.deliveryBoy;    
  }

  getdailyreport() {
    console.log('working');
    this.api.get(`/getdailyreport`).subscribe((val: Array<any>) => {
      this.dailyreport = val;
    });
  }
  // get dailyreport() {
  //   return this.Custom.dailyreport;
  // }

}
