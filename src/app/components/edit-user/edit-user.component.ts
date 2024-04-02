import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: String;
  users: any = {};
  updateForm: FormGroup;

  constructor(private Custom: CustomerService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { 
    this.createForm(); 
   }

  createForm() {
    this.updateForm = this.fb.group({
      user_flag_danger: ['', Validators.required],
      user_flag_important: ['', Validators.required],
      goldMember: ['', Validators.required],
      remarks: ['', Validators.required],
      wallet_balance: ['', Validators.required],
      feedback_private: ['', Validators.required],
      message: ['', Validators.required],
      rate: ['', Validators.required],
      show: ['', Validators.required]
      });
  } 

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.Custom.getUsersById(this.id).subscribe(res => {
        this.users = res;
        console.log(this.users);
        this.updateForm.patchValue({})
        this.updateForm.get('user_flag_danger').setValue(this.users.user_flag_danger);
        this.updateForm.get('user_flag_important').setValue(this.users.user_flag_important);
        this.updateForm.get('goldMember').setValue(this.users.goldMember);
        this.updateForm.get('remarks').setValue(this.users.remarks);
        this.updateForm.get('wallet_balance').setValue(this.users.wallet_balance);
        this.updateForm.get('feedback_private').setValue(this.users.feedback_private);
        this.updateForm.get('message').setValue(this.users.notice['message']);
        this.updateForm.get('rate').setValue(this.users.notice['rate']);
        this.updateForm.get('show').setValue(this.users.notice['show']);
      });
    });
  }

  updateUser(user_flag_danger, user_flag_important, goldMember, remarks, wallet_balance, feedback_private, message, rate, show) {
    // tslint:disable-next-line:max-line-length
    this.Custom.updateCustomers(this.id, user_flag_danger, user_flag_important, goldMember, remarks, wallet_balance, feedback_private, message, rate, show).subscribe(() => {
      this.router.navigate(['/customerlist']);
     });
  }

}
