import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

import { AuthData } from "../auth-data.model";
import { BASE_URL } from "src/api.service";

@Injectable({ providedIn: "root" })
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();
  private name: string;
  private designation: string;
  private username: string;

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAdminDetail() {
    return {
      name: this.name,
      type: this.designation,
      owner: this.designation === 'owner' ? true: false,
      employee: this.designation === 'employee' ? true: false,
      deliveryBoy: this.designation === 'owner' ? true: false,
      username: this.username
    };
  }

  getAdminType() {
    return this.designation;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  login(email: string, password: string) {
    const authData: AuthData = { username: email, password: password };
    this.http.post<{ token: string; expiresIn: number; name: string; designation: string, username: string }>( `${BASE_URL}/admin_login`, authData )
      .subscribe(response => {
        const token = response.token;
        this.name = response.name;
        this.token = token;
        if (token) {
          const expiresInDuration = response.expiresIn;

          this.setAuthTimer(expiresInDuration);

          this.isAuthenticated = true;
          this.name = response.name;
          this.designation = response.designation;
          this.username = response.username;

          this.authStatusListener.next(true);

          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);

          this.saveAuthData(token, expirationDate, this.name, this.designation, this.username);
          
          this.router.navigate(["/"]);          
        }
      });
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.name = authInformation.name;
      this.designation = authInformation.designation;
      this.username = authInformation.username;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.name = null;
    this.designation = null;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(["/login"]);
  }

  private setAuthTimer(duration: number) {
    console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, name: string, designation: string, username: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("name", name);
    localStorage.setItem("designation", designation);
    localStorage.setItem("username", username);
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("name");
    localStorage.removeItem("designation");
    localStorage.removeItem("username");
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const name = localStorage.getItem("name");
    const designation = localStorage.getItem("designation");
    const username = localStorage.getItem("username");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      name,
      designation,
      username
    }
  }
}

