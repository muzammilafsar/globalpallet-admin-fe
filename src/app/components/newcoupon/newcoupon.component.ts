import { Component, OnInit } from '@angular/core';
import { CouponService } from '../../coupon.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newcoupon',
  templateUrl: './newcoupon.component.html',
  styleUrls: ['./newcoupon.component.css']
})
export class NewcouponComponent implements OnInit {

  createForm: FormGroup;

  constructor(private couponService: CouponService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      code: '',
      amount: '',
      enable: '',
      details: '',
      date_of_creation: '',
      validity: '',
      times_valid_per_user: '',
      first_order_only: '',
      valid_once: '',
      active: '',  
      min_order_value: '',
      min_order_applicable: '',
      percent: '',
      goldMember: '',
      index: ''
      });
   }

  ngOnInit() {}

  addCoupons(name, code, amount, enable, details, date_of_creation, validity, times_valid_per_user, first_order_only, valid_once, active, min_order_value, min_order_applicable, percent, goldMember, index) {
    // tslint:disable-next-line:max-line-length
    this.couponService.addCoupon(name, code, amount, enable, details, date_of_creation, validity, times_valid_per_user, first_order_only, valid_once, active, min_order_value, min_order_applicable, percent, goldMember, index).subscribe(() => {
      this.router.navigate(['/coupons']);
    });
  }

}
