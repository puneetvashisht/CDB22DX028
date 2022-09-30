import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

const Base_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: any;
  isAuthenticated: boolean = false;
  private authStatusListener = new Subject<boolean>();
  constructor(private http: HttpClient, private router: Router) {
    this.autoAuthUser();
  }

  afterLoginOrSignUp(response: any) {
    console.log(response);
    this.isAuthenticated = true;
    this.token = response.returnedToken;
    localStorage.setItem('bearer', response.token);

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

  logout() {
    console.log('logout service called');

    this.isAuthenticated = false;
    this.router.navigate(['/']);
  }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatsListener() {
    return this.authStatusListener.asObservable();
  }

  autoAuthUser() {
    setInterval(() => {
      // console.log('auto called', this.getIsAuth());
      this.authStatusListener.next(this.getIsAuth());
    }, 100);
  }
}
