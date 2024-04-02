import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../../order.service';
import {Router} from '@angular/router';
import {Order} from '../../../order.model';
// import {MatPaginator, MatTableDataSource} from '@angular/material'; 
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
// MatPaginator Output
  pageEvent: PageEvent;
  orders: Order[];
  length = 0;
  page = 1;
  pageSize = 50;
  pageSizeOptions = [10, 25, 50];

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
    this.fetchOrders();
  }
  getData($event) {
    this.page = $event['pageIndex'];
    this.pageSize = $event['pageSize'];
    this.fetchOrders();
  }
  fetchOrders() {
    this.orders = [];
    this.orderService.getOrders(this.page, this.pageSize).subscribe((data) => {
        this.orders = data['orders']['docs'];
        this.length = data['orders']['total'];
        // this.orders.reverse();
        // console.log(this.length);
        // console.log('Data requested ...');
        // console.log(this.orders);
      });
  }

}
