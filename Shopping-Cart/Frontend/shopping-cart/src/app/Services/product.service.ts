import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const Base_URL = 'http://localhost:3000/product/';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(public http: HttpClient) {}

  getProducts() {
    return this.http.get(Base_URL);
  }
  getSingleProducts(id: any) {
    return this.http.get(Base_URL + id);
  }
}
