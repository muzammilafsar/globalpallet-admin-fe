import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { AuthService } from './app/auth.service';

export const BASE_URL = 'https://globalpallet-be.onrender.com';
// export const BASE_URL = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  confirmedOrder = null;
  // baseUrl = 'http://localhost:3000';
   baseUrl = BASE_URL;

  allCatWithSubCat = [];
  productDesction = {};

  constructor(private http: HttpClient, private login: LoginService) {

  }

  get(url) {
    return this.http.get(`${this.baseUrl}${url}`);
  }

  post(url, body) {
    return this.http.post(`${this.baseUrl}${url}`, body);
  }

}
