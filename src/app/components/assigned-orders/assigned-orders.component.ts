import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-assigned-orders',
  templateUrl: './assigned-orders.component.html',
  styleUrls: ['./assigned-orders.component.css']
})
export class AssignedOrdersComponent implements OnInit {
  orders = [];
  username = '';

  constructor(private api: ApiService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    const admin = this.authService.getAdminDetail(); 
    this.username = admin.username;
    this.fetchOrders(); 
    setInterval((orders)=> {
      return this.fetchOrders();
    }, 5*60*1000);
  }

  fetchOrders() {
    this.api.post(`/getorderbyboy`, {boy: this.username}).subscribe((data) => {
        this.orders = data['orders'];
        console.log('Data requested ...');
        console.log(this.orders);
      });
  }

}
