import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor(private api: ApiService) { }

  getexplore() {
    return this.api.get(`/explore`);
  }
  getExploreById(id) {
    return this.api.get(`/explore/${id}`);
  }

  addExplore(name, icon, image, color, title, tag) {
    const explore = {
      name: name,
      icon: icon,
      image: image,
      color: color,
      title: title,
      tag: tag,
    };
    return this.api.post(`/createexplore`, explore);
  }

  // tslint:disable-next-line:max-line-length
  updateExplore(id, name, icon, image, color, title, tag) {
    const explore = {
      name: name,
      icon: icon,
      image: image,
      color: color,
      title: title,
      tag: tag,
    };
    return this.api.post(`/explore/update/${id}`, explore);
  }

  deleteExplore(id) {
    return this.api.post(`/explore/delete/${id}`, {});
  }
}
