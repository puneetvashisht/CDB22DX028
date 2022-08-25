import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  disable: boolean = false;
  show: boolean = false;
  notify: boolean = false;

  value: string = '';

  courses: any = [];
  constructor(public courseService: CourseService) {}

  ngOnInit() {
    this.courseService.fetchCourses().subscribe((data) => {
      console.log('response', data);
      this.courses = data;
    });
  }

  disableButton() {
    this.disable = true;
  }

  showButton() {
    this.show = !this.show;
  }

  handleNotify() {
    this.notify = true;
  }
}
