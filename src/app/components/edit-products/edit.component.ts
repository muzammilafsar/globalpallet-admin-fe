import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { CategoryService } from '../../category.service';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {Product} from '../../../product.model';
import {Category} from '../../../category.model';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditProductsComponent implements OnInit {

  id: String;
  product: any = {};
  updateForm: FormGroup;
  categories: Category[];

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private categoryService: CategoryService) {
    this.createForm();
   }
   createForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      image: '',
      price_1: '',
      size_1: '',
      qty_1: '',
      category: '',
      tags: '',
      status: '',
      description: '',
      veg: '',
      index: '',
      explore_tag: '',
      coming_soon: '',
      chilly_level: '',
      newly: '',
      note: '',
      popular: '',
      bit: '',
      product_id: ''
      });
  }

  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.productService.getProductById(this.id).subscribe(res => {
        this.product = res['product'];
        this.updateForm.get('name').setValue(this.product.name);
        this.updateForm.get('image').setValue(this.product.image);
        this.updateForm.get('price_1').setValue(this.product.price_1);
        this.updateForm.get('size_1').setValue(this.product.size_1);
        this.updateForm.get('qty_1').setValue(this.product.qty_1);
        this.updateForm.get('category').setValue(this.product.category);
        this.updateForm.get('tags').setValue(this.product.tags);
        this.updateForm.get('status').setValue(this.product.status);
        this.updateForm.get('description').setValue(this.product.description);
        this.updateForm.get('veg').setValue(this.product.veg);
        this.updateForm.get('index').setValue(this.product.index);
        this.updateForm.get('explore_tag').setValue(this.product.explore_tag);
        this.updateForm.get('coming_soon').setValue(this.product.coming_soon);
        this.updateForm.get('chilly_level').setValue(this.product.chilly_level);
        this.updateForm.get('newly').setValue(this.product.newly);
        this.updateForm.get('note').setValue(this.product.note);
        this.updateForm.get('popular').setValue(this.product.popular);
        this.updateForm.get('bit').setValue(this.product.bit);
        this.updateForm.get('product_id').setValue(this.product.product_id);
      });
    });
    this.fetchCategory();
  }

  fetchCategory() {
    this.categoryService
      .getcategory()
      .subscribe((data) => {
        this.categories = data['category'];
        console.log('Data requested ...');
        console.log(this.categories);
      });
  }

  updateProduct(name, image, price_1, size_1, qty_1, category, tags, status, description, veg, index, explore_tag, coming_soon, chilly_level, newly, note, popular, bit, product_id) {
    // tslint:disable-next-line:max-line-length
    this.productService.updateProduct(this.id, name, image, price_1, size_1, qty_1, category, tags, status, description, veg, index, explore_tag, coming_soon, chilly_level, newly, note, popular, bit, product_id).subscribe(() => {
      console.log('COMING SOOON VALUE', coming_soon, status);
      this.router.navigate(['/list']);
     });
  }

}
