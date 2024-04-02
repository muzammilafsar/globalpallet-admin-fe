import { Component, OnInit , ViewChild, OnDestroy} from '@angular/core';
import { Subscription } from "rxjs";

import { AuthService } from "../../auth.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav: SidenavComponent;

  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.checkauth();

    const dropdown = document.getElementsByClassName('dropdown-btn');
    let i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener('click', function() {
        this.classList.toggle('active');
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdownContent.style.display = 'block';
        }
      });
    }

  }

  checkauth() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }
  
  openSidenav() {
    this.sidenav.openNav();
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '100%';
  }

  closeNav() {
      document.getElementById('mySidenav').style.width = '0';
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
  onLogout() {
    this.authService.logout();
  }

}
