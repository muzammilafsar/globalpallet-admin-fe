import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CategoryService } from '../../category.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createcat',
  templateUrl: './createcat.component.html',
  styleUrls: ['./createcat.component.css']
})
export class CreatecategoryComponent implements OnInit {

  createForm: FormGroup;

  constructor(private categoryService: CategoryService, private fb: FormBuilder, private router: Router) { 
    this.createForm = this.fb.group({
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

  ngOnInit() {}

  addCategory(name, image, enable, source, details, tag, key, newly, segment) {
    // tslint:disable-next-line:max-line-length
    this.categoryService.addCategory(name, image, enable, source, details, tag, key, newly, segment).subscribe(() => {
      this.router.navigate(['/categorylist']);
    });
  }

}
