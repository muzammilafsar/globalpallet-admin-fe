import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ProductService } from '../../product.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Category} from '../../../category.model';
import { CategoryService } from '../../category.service';


@Component({
  selector: 'app-createp',
  templateUrl: './createp.component.html',
  styleUrls: ['./createp.component.css']
})
export class CreateproductComponent implements OnInit {

  createForm: FormGroup;
  categories: Category[];

  constructor(private productService: ProductService, private fb: FormBuilder, private router: Router, private categoryService: CategoryService) {
    this.createForm = this.fb.group({
    name: ['', Validators.required],
    product_id: '',
    image: '',
    price_1: '',
    size_1: '',
    qty_1: '',
    category: '',
    tags: '',
    chilly_level: '',
    newly: '',
    popular: '',
    note: '',
    bit: '',
    status: '',
    description: '',
    veg: '',
    index: '',
    explore_tag: '',
    coming_soon: ''
    });
   }


   addProduct(name, product_id, image, price_1, size_1,  qty_1, category, tags, chilly_level, newly, popular, note, bit, status, description, veg, index, explore_tag, coming_soon) {
    // tslint:disable-next-line:max-line-length
    this.productService.addProduct(name, product_id, image, price_1, size_1,  qty_1, category, tags, chilly_level, newly, popular, note, bit, status, description, veg, index, explore_tag, coming_soon).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() { this.fetchCategory(); }

  fetchCategory() {
    this.categoryService
      .getcategory()
      .subscribe((data) => {
        this.categories = data['category'];
        console.log('Data requested ...');
        console.log(this.categories);
      });
  }

}
