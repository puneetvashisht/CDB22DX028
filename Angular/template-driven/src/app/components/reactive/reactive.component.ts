import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  // formSubmitted: boolean = false;

  profileForm = this.fb.group({
    name: this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    }),
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    language: [''],
  });

  langs: string[] = ['English', 'French', 'German'];

  ngOnInit(): void {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // this.formSubmitted = true;
    console.warn(this.profileForm.value);
    console.log(this.profileForm);
  }

  get firstname() {
    return this.profileForm.get('name')?.get('firstName');
  }
  get lastname() {
    return this.profileForm.get('name')?.get('lastName');
  }
  get email() {
    return this.profileForm.get('email');
  }
  get password() {
    return this.profileForm.get('password');
  }
}
