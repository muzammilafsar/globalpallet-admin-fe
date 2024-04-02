import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../offers.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {

  createForm: FormGroup;

  constructor(private offersService: OffersService, private fb: FormBuilder, private router: Router) { 
    this.createForm = this.fb.group({
      image: '',
      title: '',
      subtitle: '',
      description: '',
      coupon_code: '',
      enabled: '',
      index: ''
      });
   }

   addOffers(image, title, subtitle, description, coupon_code, enabled, index) {
    // tslint:disable-next-line:max-line-length
    this.offersService.addOffer(image, title, subtitle, description, coupon_code, enabled, index).subscribe(() => {
      this.router.navigate(['/offers']);
    });
  }

  ngOnInit() {
  }

}
