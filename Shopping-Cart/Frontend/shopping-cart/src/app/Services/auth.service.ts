import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const Base_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public http: HttpClient) {}

  createUser(data: any) {
    return this.http.post(Base_URL + 'register', data);
  }
  login(data: any) {
    return this.http.post(Base_URL + 'login', data);
  }
}
