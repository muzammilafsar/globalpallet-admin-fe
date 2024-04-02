import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor(private api: ApiService) { }

  getconstants() {
    return this.api.get(`/get_all_constant`);
  }
  
  getConstantsById(id) {
    return this.api.post(`/getconstantbyid`, {id});
  }

  // tslint:disable-next-line:max-line-length
  updateConstants(key, constants) {
    const constant = {
      key: key,
      constants: constants
    };
    return this.api.post(`/edit_constant`, {key, constants});
  }
}
