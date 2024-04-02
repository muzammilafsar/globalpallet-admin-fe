import { Component, OnInit } from '@angular/core';
import { CarouselsService } from '../../carousels.service';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-carousel',
  templateUrl: './edit-carousel.component.html',
  styleUrls: ['./edit-carousel.component.css']
})
export class EditCarouselComponent implements OnInit {

  id: String;
  carousel: any = {};
  updateForm: FormGroup;

  constructor(private carouselsService: CarouselsService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { 
    this.createForm();
  }
  createForm() {
    this.updateForm = this.fb.group({
      url_1: ['', Validators.required],
      url_2: '',
      url_3: '',
      text: '',
      description: '',
      enabled: '',
      index: ''
      });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.carouselsService.getCarouselsById(this.id).subscribe(res => {
        this.carousel = res;
        console.log(this.carousel);
        this.updateForm.patchValue({})
        this.updateForm.get('url_1').setValue(this.carousel.url_1);
        this.updateForm.get('url_2').setValue(this.carousel.url_2);
        this.updateForm.get('url_3').setValue(this.carousel.url_3);
        this.updateForm.get('text').setValue(this.carousel.text);
        this.updateForm.get('description').setValue(this.carousel.description);
        this.updateForm.get('enabled').setValue(this.carousel.enabled);
        this.updateForm.get('index').setValue(this.carousel.index);
      });
    });
  }

  updateCarousels(url_1, url_2, url_3, text, description, enabled, index) {
    // tslint:disable-next-line:max-line-length
    this.carouselsService.updateCarousels(this.id, url_1, url_2, url_3, text, description, enabled, index).subscribe(() => {
      this.router.navigate(['/carousels']);
    });
  }

}

