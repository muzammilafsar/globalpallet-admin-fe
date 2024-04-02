import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  constructor(private Custom: CustomerService, private router: Router) {  }

  ngOnInit() {
    this.Custom.getCustomers();
  }

  get customers() {
    return this.Custom.allCustomer;
  }
  
  editUser(id) {
    this.router.navigate([`/edituser/${id}`]);
  }
}

 