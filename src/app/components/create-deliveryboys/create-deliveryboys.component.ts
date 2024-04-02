import { Component, OnInit } from '@angular/core';
import { DeliveryBoysService } from '../../delivery-boys.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-deliveryboys',
  templateUrl: './create-deliveryboys.component.html',
  styleUrls: ['./create-deliveryboys.component.css']
})
export class CreateDeliveryboysComponent implements OnInit {

  createForm: FormGroup;

  constructor(private delService: DeliveryBoysService, private fb: FormBuilder, private router: Router) { 
    this.createForm = this.fb.group({
      name: '',
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

   addBoy(name, username, password, mobile, email, designation, photograph, description, delivers) {
    // tslint:disable-next-line:max-line-length
    this.delService.addBoy(name, username, password, mobile, email, designation, photograph, description, delivers).subscribe(() => {
      this.router.navigate(['/deliveryboyslist']);
    });
  }

  ngOnInit() {
  }

}
