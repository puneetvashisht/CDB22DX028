import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent {
  title = 'template-driven';

  model: Signup = new Signup();

  @ViewChild('f') form: any;

  langs: string[] = ['English', 'French', 'German'];

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
      this.form.reset();
    }
  }
}

class Signup {
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public email: string = '',
    public password: string = '',
    public language: string = ''
  ) {}
}
