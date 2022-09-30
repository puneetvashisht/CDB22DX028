import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const Base_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(public http: HttpClient) {}

  getProducts() {
    return this.http.get(Base_URL + 'product');
  }
  getSingleProducts(id: any) {
    return this.http.get(Base_URL + 'product/' + id);
  }

  addToCart(id: any) {
    return this.http.post(Base_URL + 'assignProductToUser/' + id, {});
  }

  getCartProducts() {
    return this.http.get(Base_URL + 'userProducts');
  }

  buyAllItems() {
    return this.http.delete(Base_URL + 'buyAll');
  }
}
