import { Component, OnInit } from '@angular/core';
import { DeliveryBoysService } from '../../delivery-boys.service';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-deliveryboys',
  templateUrl: './edit-deliveryboys.component.html',
  styleUrls: ['./edit-deliveryboys.component.css']
})
export class EditDeliveryboysComponent implements OnInit {

  id: String;
  deliveryboys: any = {};
  updateForm: FormGroup;

  constructor(private delservice: DeliveryBoysService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { 
    this.createForm();
  }
  createForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      username: '',
      password: '',
      mobile: '',
      email: '',
      designation: '',
      photograph: '',
      description: '',
      delivers: ''
      });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.delservice.getBoyById(this.id).subscribe(res => {
        this.deliveryboys = res;
        console.log(this.deliveryboys); 
        this.updateForm.patchValue({})
        this.updateForm.get('name').setValue(this.deliveryboys.name);
        this.updateForm.get('username').setValue(this.deliveryboys.username);
        this.updateForm.get('password').setValue(this.deliveryboys.password);
        this.updateForm.get('mobile').setValue(this.deliveryboys.mobile);
        this.updateForm.get('email').setValue(this.deliveryboys.email);
        this.updateForm.get('designation').setValue(this.deliveryboys.designation);
        this.updateForm.get('photograph').setValue(this.deliveryboys.photograph);
        this.updateForm.get('description').setValue(this.deliveryboys.description);
        this.updateForm.get('delivers').setValue(this.deliveryboys.delivers);
      });
    });
  }

  updateBoys(name, username, password, mobile, email, designation, photograph, description, delivers) {
    // tslint:disable-next-line:max-line-length
    this.delservice.updateBoy(this.id, name, username, password, mobile, email, designation, photograph, description, delivers).subscribe(() => {
      this.router.navigate(['/deliveryboyslist']);
    });
  }

}
