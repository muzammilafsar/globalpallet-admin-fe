import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  
  id: String;
  category: any = {};
  updateForm: FormGroup;

  constructor( private categoryService: CategoryService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder ) { 
    this.createForm();
   }

  createForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      image: '',
      enable: '',
      source: '',
      details: '',
      tag: '',
      key: '',
      newly: '',
      segment: ''
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.categoryService.getCategoryById(this.id).subscribe(res => {
        this.category = res['category'];
        this.updateForm.get('name').setValue(this.category.name);
        this.updateForm.get('image').setValue(this.category.image);
        this.updateForm.get('enable').setValue(this.category.enable);
        this.updateForm.get('source').setValue(this.category.source);
        this.updateForm.get('details').setValue(this.category.details);
        this.updateForm.get('tag').setValue(this.category.tag);
        this.updateForm.get('key').setValue(this.category.key);
        this.updateForm.get('newly').setValue(this.category.newly);
        this.updateForm.get('segment').setValue(this.category.segment);
        console.log(this.category);
      });
    });
  }

  updateCategory(name, image, enable, source, details, tag, key, newly, segment) {
    // tslint:disable-next-line:max-line-length
    this.categoryService.updateCategory(this.id, name, image, enable, source, details, tag, key, newly, segment).subscribe(() => {
      this.router.navigate(['/categorylist']);
     });
  }

}
