import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-businessreport',
  templateUrl: './businessreport.component.html',
  styleUrls: ['./businessreport.component.css']
})
export class BusinessreportComponent implements OnInit {

  businessreport = {};
  oldbusiness = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getbusinessreport();
    this.getbusinessreport2();

  }

  getbusinessreport() {
      this.api.get(`/getbusinessreport`).subscribe((val: any) => {
        if (val) {
          this.businessreport = val;
        } else {
          this.businessreport = {};
        }
      });
    }

    getbusinessreport2() {
      this.api.get(`/getoldbusiness`).subscribe((val: any) => {
        this.oldbusiness = val;
        console.log('biz monthly basis', val);
      });
    }

    Reset() {
      this.api.get(`/resetbusinessdata`).subscribe(() => {
      alert('Do you wish to reset this data ?');
      this.router.navigate([`/dailyreport`]);
      console.log('reseted');
      });
    }

  }


