import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  

  allCustomer = [];
  otpdata = [];
  deleteddata = [];
  appinstalldata = [];
  feedback = [];

  constructor(private api: ApiService) {}

  getUsersById(id) {
    return this.api.get(`/customersbyid/${id}`);
  }

  getCustomers() {
    console.log('working');
    this.api.get(`/customers`).subscribe((val: Array<any>) => {
      this.allCustomer = val;
    });
  }

  // tslint:disable-next-line:max-line-length
  updateCustomers(id, user_flag_danger, user_flag_important, goldMember, remarks, wallet_balance, feedback_private, message, rate, show) {
    const users = {
      user_flag_danger: user_flag_danger,
      user_flag_important: user_flag_important,
      goldMember: goldMember,
      remarks: remarks,
      wallet_balance: wallet_balance,
      feedback_private: feedback_private,
      notice: {
        message: message,
        rate: rate,
        show: show
      }
    };
    return this.api.post(`/updatecustomers`, {id, users});
  }

  // updateCustomer(id, user_flag_danger, user_flag_important) {
  //   const user = {
  //     id: id,
  //     user_flag_danger: user_flag_danger,
  //     user_flag_important: user_flag_important
  //   };
  //   return this.http.post(`${this.uri}/updatecustomers`, {id, user});
  // }

  getotphistory() {
    console.log('working');
    this.api.get(`/otphistory`).subscribe((val: Array<any>) => {
      this.otpdata = val;
    });
  }

  getappinstallhistory() {
    console.log('working');
    this.api.get(`/getinstalls`).subscribe((val: Array<any>) => {
      this.appinstalldata = val;
    });
  }

  getfeedbacks() {
    console.log('working');
    this.api.get(`/getfeedbacks`).subscribe((val: Array<any>) => {
      this.feedback = val;
    });
  }

  getuserdeletedaddress() {
    console.log('working');
    this.api.post(`/getaddresseslist`, {}).subscribe((val: Array<any>) => {
      this.deleteddata = val;
    });
  }


}
