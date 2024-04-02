import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  

  constructor(private api: ApiService) { }

  getcategory() {
    return this.api.get(`/category`);
  }
  getCategoryById(id) {
    return this.api.get(`/category/${id}`);
  }

  addCategory(name, image, enable, source, details, tag, key, newly, segment) {
    const category = {
      name: name,
      image: image,
      enable: enable,
      source: source,
      details: details,
      tag: tag,
      key: key,
      newly: newly,
      segment: segment
    };
    return this.api.post(`/createcategory`, category);
  }
  
  // tslint:disable-next-line:max-line-length
  updateCategory(id, name, image, enable, source, details, tag, key, newly, segment) {
    const category = {
      id: id,
      name: name,
      image: image,
      enable: enable,
      source: source,
      details: details,
      tag: tag,
      key: key,
      newly: newly,
      segment: segment
    };
    return this.api.post(`/category/update/${id}`, category);
  }
  
  deleteCategory(id) {
    return this.api.post(`/category/delete/${id}`, {});
  }
}
