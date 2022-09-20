import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  loginUser() {
    this.authService
      .login({ email: this.email, password: this.password })
      .subscribe((res) => console.log('LoggedIn', res));
  }
}
