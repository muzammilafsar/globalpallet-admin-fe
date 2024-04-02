import { Component, OnInit } from '@angular/core';
import { CouponService } from '../../coupon.service';
import {Router} from '@angular/router';

import {Coupon} from '../../../coupon.model';

@Component({
  selector: 'app-cupons',
  templateUrl: './cupons.component.html',
  styleUrls: ['./cupons.component.css']
})
export class CuponsComponent implements OnInit {

  coupons: Coupon[];

  constructor(private couponService: CouponService, private router: Router) { }

  ngOnInit() {
    this.fetchcoupons();
  }

  fetchcoupons() {
    this.couponService
      .getcoupons()
      .subscribe((data: Coupon[]) => {
        this.coupons = data;
        console.log('Data requested ...');
        console.log(this.coupons);
      });
  }

  editCoupons(id) {
    this.router.navigate([`/editcoupon/${id}`]); 
  }

  deleteCoupons(id) {
    this.couponService.deleteCoupons(id).subscribe(() => {
      this.fetchcoupons();
    });
  }

}
