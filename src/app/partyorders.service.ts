import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class PartyordersService {

  

  constructor(private api: ApiService) { }

  getPartyRequest() {
    return this.api.get(`/partyorder`);
  }

  getPartyRequestById(id) {
    return this.api.get(`/partyorder/${id}`);
  }

  // deletePartyRequest(id) {
  //   return this.api.post(`/partyorder/delete/${id}`, {});
  // }

  partyresolve(id) {
    return this.api.post(`/partycomplete/${id}`, {});
  }

}
