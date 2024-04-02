import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import {Router} from '@angular/router';

import {Category} from '../../../category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

category: Category[];

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.fetchCategory();
  }

  fetchCategory() {
    this.categoryService
      .getcategory()
      .subscribe((data) => {
        this.category = data['category'];
        console.log('Data requested ...');
        console.log(this.category);
      });
  }

  editCategory(id) {
    this.router.navigate([`/editcategory/${id}`]);
  }

  deleteCategory(id) {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.fetchCategory();
    });
  }
}
