import { Component, OnInit } from '@angular/core';
import { PartyordersService } from '../../partyorders.service';
import {Router} from '@angular/router';
import {PartyOrders} from '../../../party-orders.model';

@Component({
  selector: 'app-part-orders',
  templateUrl: './part-orders.component.html',
  styleUrls: ['./part-orders.component.css']
})
export class PartOrdersComponent implements OnInit {

  partyorder: PartyOrders[];

  constructor(private partyordersService: PartyordersService, private router: Router) { }

  ngOnInit() {
    this.fetchPartyRequest();
  }

  fetchPartyRequest() {
    this.partyordersService
      .getPartyRequest()
      .subscribe((data: PartyOrders[]) => {
        this.partyorder = data;
        console.log('Data requested ...');
        console.log(this.partyorder);
      });
  }

  // deletePartyRequest(id) {
  //   this.partyordersService.deletePartyRequest(id).subscribe(() => {
  //     this.fetchPartyRequest();
  //   });
  // }

  partyresolve(id) {
    this.partyordersService.partyresolve(id).subscribe(() => {
      this.fetchPartyRequest();
    });
  }
}
