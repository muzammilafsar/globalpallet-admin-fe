import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  

  constructor(private api: ApiService) { }

  getOrders(page, perPage) {
    return this.api.post(`/orders?page=${page}&perPage=${perPage}`, {});
  }
  getOrderById(id) {
    return this.api.post(`/getactiveorder`, {id});
  }
  getActiveOrders() {
    return this.api.post(`/activeorders`, {});
  }
  completeOrder(id, boy) {
    return this.api.post(`/adminordercomplete`, {order_id: id, boy});
  }
  cancelOrder(id, reason) {
    return this.api.post(`/admincancel`, {order_id: id, reason});
  }
  editActiveOrder(id, user_remarks, status_note) {
    const order = {
      user_remarks: user_remarks,
      status_note: status_note
    };
    return this.api.post(`/editactiveorder`, {id, order});
  }
  
  getMain() {
    return this.api.get(`/mains`);
  }
}
