import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiService } from '../../../api.service';


@Component({
  selector: 'app-assign-delivery',
  templateUrl: './assign-delivery.component.html',
  styleUrls: ['./assign-delivery.component.css']
})
export class AssignDeliveryComponent implements OnInit {
  boys = [];
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getboys();
  }
  
  getboys() {
    console.log('working');
    this.api.get(`/getboys`).subscribe((val: any) => {
      this.boys = val['boys'];
      console.log("boys", val);
    });
  }

  assignorder() {
    
  }

}
