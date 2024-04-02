import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})

export class CouponService {

  constructor(private api: ApiService) { }

  getcoupons() {
    return this.api.get(`/getcoupon`);
  }
  
  getCouponById(id) {
    return this.api.post(`/getcouponbyid`, {id});
  }

  addCoupon(name, code, amount, enable, details, date_of_creation, validity, times_valid_per_user, first_order_only, valid_once, active, min_order_value, min_order_applicable, percent, goldMember, index) {
    const coupon = {
      name: name,
      code: code,
      amount: amount,
      enable: enable,
      details: details,
      date_of_creation: date_of_creation,
      validity: validity,
      times_valid_per_user: times_valid_per_user,
      first_order_only: first_order_only,
      valid_once: valid_once,
      active: active,  
      min_order_value: min_order_value,
      min_order_applicable: min_order_applicable,
      percent: percent,
      goldMember: goldMember,
      index: index
    };
    return this.api.post(`/createcoupon`, coupon);
  }

  // tslint:disable-next-line:max-line-length
  updateCoupons(id, name, code, amount, enable, details, date_of_creation, validity, times_valid_per_user, first_order_only, valid_once, active, min_order_value, min_order_applicable, percent, goldMember, index) {
    const coupon = {
      name: name,
      code: code,
      amount: amount,
      enable: enable,
      details: details,
      date_of_creation: date_of_creation,
      validity: validity,
      times_valid_per_user: times_valid_per_user,
      first_order_only: first_order_only,
      valid_once: valid_once,
      active: active,  
      min_order_value: min_order_value,
      min_order_applicable: min_order_applicable,
      percent: percent,
      goldMember: goldMember,
      index: index
    };
    return this.api.post(`/editcoupon`, {id, coupon});
  }
  
  deleteCoupons(id) {
    return this.api.post(`/deletecoupon`, {id}); 
  }
}
