import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const Base_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: any;
  isAuthenticated: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}

  afterLoginOrSignUp(response: any) {
    console.log(response);
    this.token = response.returnedToken;
    localStorage.setItem('bearer', response.token);
    this.isAuthenticated = true;
    this.router.navigate(['/products']);
  }

  createUser(data: any) {
    this.http.post(Base_URL + 'register', data).subscribe((res: any) => {
      this.afterLoginOrSignUp(res);
    });
  }
  login(data: any) {
    this.http.post(Base_URL + 'login', data).subscribe((res: any) => {
      this.afterLoginOrSignUp(res);
    });
  }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }
}
