import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../offers.service';
import {Router} from '@angular/router';

import {Offer} from '../../../offer.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offers: Offer[];

  constructor(private offersService: OffersService, private router: Router) { }

  ngOnInit() {
    this.fetchoffers();
  }

  fetchoffers() {
    this.offersService
      .getoffers()
      .subscribe((data: Offer[]) => {
        this.offers = data;
        console.log('Data requested ...');
        console.log(this.offers);
      });
  }

  editOffers(id) {
    this.router.navigate([`/editoffers/${id}`]); 
  }

  deleteOffers(id) {
    this.offersService.deleteOffers(id).subscribe(() => {
      this.fetchoffers();
    });
  }

} 
