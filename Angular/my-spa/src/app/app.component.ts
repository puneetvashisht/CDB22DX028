import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  disable: boolean = false;
  notify: boolean = false;

  value: string = '';

  courses: any = [];
  constructor(public courseService: CourseService) {}

  ngOnInit() {}

  disableButton() {
    this.disable = true;
  }

  handleNotify() {
    this.notify = true;
  }
}
