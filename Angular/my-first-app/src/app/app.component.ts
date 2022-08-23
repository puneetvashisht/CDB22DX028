import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  disable: boolean = false;
  show: boolean = false;

  courses = [
    { title: 'Angular', summary: 'Framework from Google' },
    { title: 'React', summary: 'Library from facebook' },
    { title: 'Nodejs', summary: 'Server-side JS' },
    { title: 'Ember', summary: 'Open-source Frontend' },
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
}
