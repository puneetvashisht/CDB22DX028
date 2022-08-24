import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  disable: boolean = false;
  show: boolean = false;
  notify: boolean = false;
  title: string = '';
  summary: string = '';
  value: string = '';

  courses = [
    { title: 'Angular', summary: 'Framework from Google', shared: false },
    { title: 'React', summary: 'Library from facebook', shared: false },
    { title: 'Nodejs', summary: 'Server-side JS', shared: false },
    { title: 'Ember', summary: 'Open-source Frontend', shared: false },
  ];

  disableButton() {
    this.disable = true;
  }

  showButton() {
    this.show = !this.show;
  }

  handleDelete(title: string) {
    let filteredCourseList = this.courses.filter(
      (course) => course.title !== title
    );
    this.courses = filteredCourseList;
  }

  handleShare(title: string) {
    this.courses.map((course) => {
      if (course.title === title) {
        course.shared = true;
      }
    });
  }

  handleNotify() {
    this.notify = true;
  }

  addCourse() {
    this.courses.push({
      title: this.title,
      summary: this.summary,
      shared: false,
    });
  }
}
