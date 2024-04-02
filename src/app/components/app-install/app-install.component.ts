import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-app-install',
  templateUrl: './app-install.component.html',
  styleUrls: ['./app-install.component.css']
})
export class AppInstallComponent implements OnInit {

  constructor(private Custom: CustomerService) { }

  ngOnInit() {
    this.Custom.getappinstallhistory();
  }

  get appdata() {
    return this.Custom.appinstalldata;
  }

}
