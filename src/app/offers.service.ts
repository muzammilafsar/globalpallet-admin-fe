import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  

  constructor(private api: ApiService) { }

  getoffers() {
    return this.api.get(`/get_all_offer`);
  }
  
  getOffersById(id) {
    return this.api.post(`/get_offer`, {id});
  }

  
  addOffer(image, title, subtitle, description, coupon_code, enabled, index) {
    const offer = {
      image: image,
      title: title,
      subtitle: subtitle,
      description: description,
      coupon_code: coupon_code,
      enabled: enabled,
      index: index
    };
    return this.api.post(`/create_offer`, {offer: offer});
  }

  // tslint:disable-next-line:max-line-length
  updateOffers(id, image, title, subtitle, description, coupon_code, enabled, index) {
    const offer = {
      image: image,
      title: title,
      subtitle: subtitle,
      description: description,
      coupon_code: coupon_code,
      enabled: enabled,
      index: index
    };
    return this.api.post(`/edit_offer`, {id, offer});
  }
  
  deleteOffers(id) {
    return this.api.post(`/delete_offer`, {id});
  }
}
