import { Component, OnInit } from '@angular/core';
import { CarouselsService } from '../../carousels.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-carousel',
  templateUrl: './create-carousel.component.html',
  styleUrls: ['./create-carousel.component.css']
})
export class CreateCarouselComponent implements OnInit {

  createForm: FormGroup;

  constructor(private carouselsService: CarouselsService, private fb: FormBuilder, private router: Router) { 
    this.createForm = this.fb.group({
      url_1: '',
      url_2: '',
      url_3: '',
      text: '',
      description: '',
      enabled: '',
      index: ''
      });
   }

   addCarousels(url_1, url_2, url_3, text, description, enabled, index) {
    // tslint:disable-next-line:max-line-length
    this.carouselsService.addCarousel(url_1, url_2, url_3, text, description, enabled, index).subscribe(() => {
      this.router.navigate(['/carousels']);
    });
  }

  ngOnInit() {
  }

}
