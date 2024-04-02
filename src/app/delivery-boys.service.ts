import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class DeliveryBoysService {

  constructor(private api:ApiService) { }

  DeliveryBoys() {
    return this.api.get('/getcompleteboys');
  }

  getBoyById(id) {
    return this.api.post(`/getboybyid`, {id});
  }

  addBoy(name, username, password, mobile, email, designation, photograph, description, delivers) {
    const boy = {
      name: name,
      username: username,
      password: password,
      mobile: mobile,
      email: email,
      designation: designation,
      photograph: photograph,
      description: description,
      delivers: delivers
    };
    return this.api.post(`/create_admin`, boy);
  }

  updateBoy(id, name, username, password, mobile, email, designation, photograph, description, delivers) {
    const boy = {
      name: name,
      username: username,
      password: password,
      mobile: mobile,
      email: email,
      designation: designation,
      photograph: photograph,
      description: description,
      delivers: delivers
    };
    return this.api.post(`/editboy`, {id, boy});
  }

  deleteboy(id) {
    return this.api.post(`/deleteboy`, {id});
  } 
}
