import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class LocalityService {

  

  constructor(private api: ApiService) { }

  getLocality() {
    return this.api.get(`/locality`);
  }
  
  getLocalityById(id) {
    return this.api.get(`/localitybyid/${id}`);
  }

  addLocality(key, name, enable, description, locality_id, index) {
    const locality = {
      key: key,
      name: name,
      enable: enable,
      description: description,
      locality_id: locality_id,
      index: index
    };
    return this.api.post(`/createlocality`, locality);
  }

    updatelocality(id, key, name, enable, description, locality_id, index) {
      const locality = {
        key: key,
        name: name,
        enable: enable,
        description: description,
        locality_id: locality_id,
        index: index
      };
      return this.api.post(`/editlocality`, {id, locality});
    }

  
  deleteLocality(id) {
    return this.api.post(`/deletelocality`, {id});
  }
}
