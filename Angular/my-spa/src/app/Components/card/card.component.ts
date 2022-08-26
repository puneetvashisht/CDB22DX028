import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  courses: any = [];

  constructor(public courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.fetchCourses().subscribe((data) => {
      console.log('response', data);
      this.courses = data;
    });
  }

  deleteCourse(id: number) {
    this.courseService
      .deleteCourse(id)
      .subscribe((res: any) => console.log('delete response', res));
  }
  sharedCourse(id: number) {
    this.courseService
      .updateCourse(id, {
        shared: true,
      })
      .subscribe((res: any) => console.log('update response', res));
  }
}
