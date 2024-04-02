import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private api: ApiService) { } 

getProducts() {
  return this.api.get(`/products`);
}

getProductById(id) {
  return this.api.get(`/products/${id}`);
}


addProduct(name, product_id, image, price_1, size_1,  qty_1, category, tags, chilly_level, newly, popular, note, bit, status, description, veg, index, explore_tag, coming_soon) {
  const product = {
    name: name,
    product_id: product_id,
    image: image,
    price_1: price_1,
    size_1: size_1,
    qty_1: qty_1,
    category: category,
    tags: tags,
    chilly_level: chilly_level,
    newly: newly,
    popular: popular,
    note: note,
    bit: bit,
    status: status,
    description: description,
    veg: veg,
    index: index,
    explore_tag: explore_tag,
    coming_soon: coming_soon
  };
  return this.api.post(`/createproduct`, product);
}

// tslint:disable-next-line:max-line-length
updateProduct(id, name, image, price_1, size_1, qty_1, category, tags, status, description, veg, index, explore_tag, coming_soon, chilly_level, newly, note, popular, bit, product_id) {
  const product = {
    id: id,
    name: name,
    image: image,
    price_1: price_1,
    size_1: size_1,
    qty_1: qty_1,
    category: category,
    tags: tags,
    status: status,
    description: description,
    veg: veg,
    index: index,
    explore_tag,
    coming_soon: coming_soon,
    chilly_level: chilly_level,
    newly: newly,
    note: note,
    popular: popular,
    bit: bit,
    product_id: product_id
  };
  console.log('COMI SOON,', coming_soon, status);
  
  return this.api.post(`/products/update/${id}`, product);
}

deleteProduct(id) {
  return this.api.post(`/products/delete/${id}`, {});
}
}
