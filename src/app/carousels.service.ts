import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class CarouselsService {

  

  constructor( private api: ApiService) { }

  getCarousels() {
    return this.api.get(`/get_all_carousel`);
    // return this.http.get(`${this.uri}/get_all_carousel`);
  }
  
  getCarouselsById(id) {
    return this.api.post(`/get_carousel`, {id});
    // return this.http.post(`${this.uri}/get_carousel`, {id});
  }

  
  addCarousel(url_1, url_2, url_3, text, description, enabled, index) {
    const carousel = {
      url_1: url_1,
      url_2: url_2,
      url_3: url_3,
      text: text,
      description: description,
      enabled: enabled,
      index: index
    };
    return this.api.post(`/create_carousel`, {carousel: carousel});
    // return this.http.post(`${this.uri}/create_carousel`, {carousel: carousel});
  }

  // tslint:disable-next-line:max-line-length
  updateCarousels(id, url_1, url_2, url_3, text, description, enabled, index) {
    const carousel = {
      url_1: url_1,
      url_2: url_2,
      url_3: url_3,
      text: text,
      description: description,
      enabled: enabled,
      index: index
    };
    return this.api.post(`/edit_carousel`, {id, carousel});
    // return this.http.post(`${this.uri}/edit_carousel`, {id, carousel});
  }
  
  deleteCarousels(id) {
    return this.api.post(`/delete_carousel`, {id});
    // return this.http.post(`${this.uri}/delete_carousel`, {id});
  }
}
