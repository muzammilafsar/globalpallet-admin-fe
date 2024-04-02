import { Component, OnInit } from '@angular/core';
import { CarouselsService } from '../../carousels.service';
import {Router} from '@angular/router';

import {Carousel} from '../../../carousels.model';

@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.css']
})
export class CarouselsComponent implements OnInit {

carousels: Carousel[];

  constructor(private caroselsService: CarouselsService, private router: Router) { }

  ngOnInit() {
    this.fetchCarousels();
  }

  fetchCarousels() {
    this.caroselsService
      .getCarousels()
      .subscribe((data: Carousel[]) => {
        this.carousels = data;
        console.log('Data requested ...');
        console.log(this.carousels);
      });
  }

  editCarousels(id) {
    this.router.navigate([`/editcarousels/${id}`]);
  }

  deleteCarousels(id) {
    this.caroselsService.deleteCarousels(id).subscribe(() => {
      this.fetchCarousels();
    });
  }
}
