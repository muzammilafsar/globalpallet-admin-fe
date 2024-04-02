import { Component, OnInit } from '@angular/core';
import { CustomerContactService } from '../../customer-contact.service';
import {Router} from '@angular/router';

import {CustomerContact} from '../../../customer-contact.model';

@Component({
  selector: 'app-customer-contact',
  templateUrl: './customer-contact.component.html',
  styleUrls: ['./customer-contact.component.css']
})
export class CustomerContactComponent implements OnInit {

  customercontact: CustomerContact[];

  constructor( private customercontactService: CustomerContactService, private router: Router ) { }

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    this.customercontactService
      .getIssues()
      .subscribe((data: CustomerContact[]) => {
        this.customercontact = data;
        console.log('Data requested ...');
        console.log(this.customercontact);
      });
  }


  // deleteIssues(id) {
  //   this.customercontactService.deleteIssues(id).subscribe(() => {
  //     this.fetchIssues();
  //   });
  // } 

  resolve(id) {
    this.customercontactService.resolve(id).subscribe(() => {
      this.fetchIssues();
    });
  }

}
