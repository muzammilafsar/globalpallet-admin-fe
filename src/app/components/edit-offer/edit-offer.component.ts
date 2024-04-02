import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../offers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.css']
})
export class EditOfferComponent implements OnInit {

  id: String;
  offer: any = {};
  updateForm: FormGroup;

  constructor(private offersService: OffersService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { 
    this.createForm();
  }
  createForm() {
    this.updateForm = this.fb.group({
      image: ['', Validators.required],
      title: '',
      subtitle: '',
      description: '',
      coupon_code: '',
      enabled: '',
      index: ''
      });
  }
 
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.offersService.getOffersById(this.id).subscribe(res => {
        this.offer = res;
        console.log(this.offer);
        this.updateForm.patchValue({})
        this.updateForm.get('image').setValue(this.offer.image);
        this.updateForm.get('title').setValue(this.offer.title);
        this.updateForm.get('subtitle').setValue(this.offer.subtitle);
        this.updateForm.get('description').setValue(this.offer.description);
        this.updateForm.get('coupon_code').setValue(this.offer.coupon_code);
        this.updateForm.get('enabled').setValue(this.offer.enabled);
        this.updateForm.get('index').setValue(this.offer.index);
      });
    });
  }
  updateOffers(image, title, subtitle, description, coupon_code, enabled, index) {
    // tslint:disable-next-line:max-line-length
    this.offersService.updateOffers(this.id, image, title, subtitle, description, coupon_code, enabled, index).subscribe(() => {
      this.router.navigate(['/offers']);
    });
  }

}

