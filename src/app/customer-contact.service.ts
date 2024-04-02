import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerContactService {

  

  constructor(private api: ApiService) { }

  getIssues() {
    return this.api.get(`/issues`);
  }

  getIssuesById(id) {
    return this.api.get(`/issues/${id}`);
  }

  // deleteIssues(id) {
  //   return this.api.post(`/issues/delete/${id}`, {});
  // }
  
  resolve(id) {
    return this.api.post(`/resolveissue/${id}`, {});
  }
}
