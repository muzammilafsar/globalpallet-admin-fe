import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import {Order} from '../../../order.model';
import { ApiService } from '../../../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-active-orders',
  templateUrl: './active-orders.component.html',
  styleUrls: ['./active-orders.component.css']
})
export class ActiveOrdersComponent implements OnInit {
  orders: Order[];
  timeLeft: any;
  interval;
  name = '';
  type = '';
  own = false;
  emp = false;
  del = false;
  username = '';
  boys = [];
  selectedboy;
  couponForm: FormGroup;
  cancelreason = [];
  selectedcancelreason;

  constructor(private api: ApiService, private orderService: OrderService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    const admin = this.authService.getAdminDetail();
    this.name = admin.name;
    this.type = admin.type;
    this.own = admin.owner;
    this.emp = admin.employee;
    this.del = admin.deliveryBoy;  
    this.username = admin.username;
    this.fetchOrders(); 
    // this.getboys();
    // this.getcancelreson();

    setInterval((orders)=> {
      return this.fetchOrders();
    }, 2*60*1000);

    this.couponForm = new FormGroup({
      'boy' : new FormControl(''),
      'cancelreasons' : new FormControl('')
    });

  }

  editOrder(id) {
    this.router.navigate([`/editorder/${id}`]);
  }

  // getboys() {
  //   this.api.get(`/getboys`).subscribe((val: any) => {
  //     this.boys = val;
  //     console.log("boys", val);
  //   });
  // }

  // getcancelreson() {
  //   this.api.get(`/getcancelreasons`).subscribe((val: any) => {
  //     this.cancelreason = val.filter(a => !a['user_access']);
  //     console.log("cancel reasons", val);
  //   });
  // }

  // assignOrder(id) {
  //  this.api.post(`/assignorder`, {boy: this.couponForm.value.boy, order_id: id}).subscribe(a => {
  //   console.log("assign ho gya", a);
  //   this.fetchOrders();
  //  });
  // }

  fetchOrders() {
    this.orderService.getActiveOrders().subscribe((data) => {
        this.orders = data['orders'];
      });
  }

  completeOrder(id) {
    this.orderService.completeOrder(id, this.username).subscribe(val => {
      if (val['status'] === 200) {
        alert('Order Completed');
      } else {
        alert('Something Went Wrong');
      }
      this.fetchOrders();
    });
  }

  // cancelOrder(id) {
  //   this.orderService.cancelOrder(id, this.couponForm.value.cancelreasons).subscribe(val => {
  //     if (val['status'] === 200) {
  //       alert('Order Cancelled');
  //     } else {
  //       alert('Something Went Wrong');
  //     }
  //     this.fetchOrders();
  //   });
  // }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 2400;
      }
    }, 1000);
  }

}
