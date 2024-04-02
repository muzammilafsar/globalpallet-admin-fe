import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../../constants.service';
import {Router} from '@angular/router';

import {Constants} from '../../../constant.model';

@Component({
  selector: 'app-constants',
  templateUrl: './constants.component.html',
  styleUrls: ['./constants.component.css']
})
export class ConstantsComponent implements OnInit {

  constants: Constants[];

  constructor(private constantsService: ConstantsService, private router: Router) { }

  ngOnInit() {
    this.fetchconstants();
  }

  fetchconstants() {
    this.constantsService
      .getconstants()
      .subscribe((data: Constants[]) => {
        this.constants = data;
        console.log('Data requested ...');
        console.log(this.constants);
      });
  }

  editConstants(id) {
    this.router.navigate([`/editconstants/${id}`]); 
  }

}
