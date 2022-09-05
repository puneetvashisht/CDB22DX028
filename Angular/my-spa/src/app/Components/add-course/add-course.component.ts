import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  title: string = '';
  summary: string = '';

  // @Output() add_course: EventEmitter<any> = new EventEmitter();

  constructor(public courseService: CourseService) {}

  ngOnInit(): void {}

  addCourse() {
    this.courseService
      .addCourse({
        title: this.title,
        description: this.summary,
        shared: false,
      })
      .subscribe((res) => console.log('add course', res));
  }
}
