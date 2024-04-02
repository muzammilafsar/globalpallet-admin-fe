import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';
import {Router, ActivatedRoute} from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import {Order} from '../../../order.model';
import { ApiService } from '../../../api.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-activeorders',
  templateUrl: './edit-activeorders.component.html',
  styleUrls: ['./edit-activeorders.component.css']
})
export class EditActiveordersComponent implements OnInit {

  singleOrder: any = [];
  interval;
  loginname = '';
  type = '';
  own = false;
  emp = false;
  del = false;
  username = '';
  updateForm: FormGroup;
  boys = [];
  couponForm: FormGroup;
  cancelreason = [];
  id: String;

  constructor(private api: ApiService, private orderService: OrderService, private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    const admin = this.authService.getAdminDetail();
    this.loginname = admin.name;
    this.type = admin.type;
    this.own = admin.owner;
    this.emp = admin.employee;
    this.del = admin.deliveryBoy;  
    this.username = admin.username;

    this.route.params.subscribe(params => {
      this.id = params.id;
      this.orderService.getOrderById(this.id).subscribe(res => {
        this.singleOrder = res;
        console.log('single',this.singleOrder);
        this.updateForm.patchValue({})
        this.updateForm.get('user_remarks').setValue(this.singleOrder.user_remarks);
        this.updateForm.get('status_note').setValue(this.singleOrder.status_note);
      });
    });

    this.getboys();
    this.getcancelreson();

    this.updateForm = new FormGroup({
     'user_remarks': new FormControl(''),
     'status_note': new FormControl('')
    });

    this.couponForm = new FormGroup({
      'boy' : new FormControl(''),
      'cancelreasons' : new FormControl('')
    });
  }

  editActiveOrder(user_remarks, status_note) {
    // tslint:disable-next-line:max-line-length
    this.orderService.editActiveOrder(this.id, user_remarks, status_note).subscribe(() => {
      this.router.navigate(['/activeorders']);
    });
  }

  getboys() {
    this.api.get(`/getboys`).subscribe((val: any) => {
      this.boys = val['boys'];
      console.log("boys", val);
    });
  }

  getcancelreson() {
    this.api.get(`/getcancelreasons`).subscribe((val: any) => {
      this.cancelreason = val.filter(a => !a['user_access']);
      console.log("cancel reasons", val);
    });
  }

  assignOrder(id) {
   this.api.post(`/assignorder`, {boy: this.couponForm.value.boy, order_id: id}).subscribe(a => {
    console.log("assign ho gya", a);
    alert('Order will be Assigned to: ' + this.couponForm.value.boy);
    this.router.navigate([`/activeorders`]);
   });
  }


  completeOrder(id) {
    this.orderService.completeOrder(id, this.username).subscribe(val => {
      if (val['status'] === 200) {
        alert('Order Completed');
      } else {
        alert('Something Went Wrong');
      }
      this.router.navigate([`/activeorders`]);
    });
  }

  cancelOrder(id) {
    this.orderService.cancelOrder(id, this.couponForm.value.cancelreasons).subscribe(val => {
      if (val['status'] === 200) {
        alert('Order Cancelled');
      } else {
        alert('Something Went Wrong');
      }
      this.router.navigate([`/activeorders`]);
    });
  }

}
