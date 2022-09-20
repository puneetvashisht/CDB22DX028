import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  registerUser() {
    this.authService
      .createUser({
        name: this.name,
        email: this.email,
        password: this.password,
      })
      .subscribe((res) => console.log('Registered', res));
  }
}
