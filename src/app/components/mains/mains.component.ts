import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { OrderService } from '../../order.service';

import {Mains} from '../../../mains.model';

@Component({
  selector: 'app-mains',
  templateUrl: './mains.component.html',
  styleUrls: ['./mains.component.css']
})
export class MainsComponent implements OnInit {

  main = {};

  constructor(private mainService: OrderService, private router: Router) { }

  ngOnInit() {
    this.fetchMains();
  }

  fetchMains() {
  var audio = new Audio('https://www.pacdv.com/sounds/machine_sound_effects/smoke-detector-1.wav');
  this.mainService.getMain().subscribe((data: any) => {
    if(data['orders'] > this.main['orders'] || data['issues'] > this.main['issues'] || data['party'] > this.main['party']) {
      audio.play();
    }
    if(data!==null && data!==undefined) {
      this.main = data;
      // console.log(this.main);
    }

      });
      // setInterval(()=> {
      //   return this.fetchMains();
      // }, 1*60*1000);
  } 

}
