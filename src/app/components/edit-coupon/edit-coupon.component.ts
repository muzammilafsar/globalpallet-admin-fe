import { Component, OnInit } from '@angular/core';
import { CouponService } from '../../coupon.service';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-coupon',
  templateUrl: './edit-coupon.component.html',
  styleUrls: ['./edit-coupon.component.css']
})
export class EditCouponComponent implements OnInit {

  id: String;
  coupon: any = {};
  updateForm: FormGroup;

  constructor(private couponService: CouponService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { 
    this.createForm();
  }
  createForm() {
    this.updateForm = this.fb.group({
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
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.couponService.getCouponById(this.id).subscribe(res => {
        this.coupon = res;
        console.log(this.coupon);
        this.updateForm.patchValue({})
        this.updateForm.get('name').setValue(this.coupon.name);
        this.updateForm.get('code').setValue(this.coupon.code);
        this.updateForm.get('amount').setValue(this.coupon.amount);
        this.updateForm.get('enable').setValue(this.coupon.enable);
        this.updateForm.get('details').setValue(this.coupon.details);
        this.updateForm.get('date_of_creation').setValue(this.coupon.date_of_creation);
        this.updateForm.get('validity').setValue(this.coupon.validity);
        this.updateForm.get('times_valid_per_user').setValue(this.coupon.times_valid_per_user);
        this.updateForm.get('first_order_only').setValue(this.coupon.first_order_only);
        this.updateForm.get('valid_once').setValue(this.coupon.valid_once);
        this.updateForm.get('active').setValue(this.coupon.active);
        this.updateForm.get('min_order_value').setValue(this.coupon.min_order_value);
        this.updateForm.get('min_order_applicable').setValue(this.coupon.min_order_applicable);
        this.updateForm.get('percent').setValue(this.coupon.percent);
        this.updateForm.get('goldMember').setValue(this.coupon.goldMember);
        this.updateForm.get('index').setValue(this.coupon.index);
      });
    });
  }

  updateCoupons(name, code, amount, enable, details, date_of_creation, validity, times_valid_per_user, first_order_only, valid_once, active, min_order_value, min_order_applicable, percent, goldMember, index) {
    // tslint:disable-next-line:max-line-length
    this.couponService.updateCoupons(this.id, name, code, amount, enable, details, date_of_creation, validity, times_valid_per_user, first_order_only, valid_once, active, min_order_value, min_order_applicable, percent, goldMember, index).subscribe(() => {
      this.router.navigate(['/coupons']);
    });
  }

}
