import { Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { Subscription } from "rxjs";
import {Router} from '@angular/router';

import { AuthService } from "../../auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav: SidenavComponent;

  userIsAuthenticated = false;
  name = '';
  type = '';
  own = false;
  emp = false;
  del = false;
  private authListenerSubs: Subscription;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {     
    // this.userIsAuthenticated = this.authService.getIsAuth();
    const admin = this.authService.getAdminDetail();
    this.name = admin.name;
    // this.type = admin.type;
    // this.own = admin.owner;
    // this.emp = admin.employee;
    // this.del = admin.deliveryBoy;

    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });

  }

  ngDoCheck(){
    this.userIsAuthenticated = this.authService.getIsAuth();
    const admin = this.authService.getAdminDetail();
    this.name = admin.name;
    this.type = admin.type;
    this.own = admin.owner;
    this.emp = admin.employee;
    this.del = admin.deliveryBoy;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate([`/login`]);
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  openSidenav() {
    this.sidenav.openNav();
  }


}
