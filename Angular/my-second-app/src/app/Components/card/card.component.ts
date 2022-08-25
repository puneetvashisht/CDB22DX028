import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input('title') title: string = 'Default Title';
  @Input('summary') summary: string = 'Default Summary';
  @Input('shared') shared: boolean = false;
  @Input('id') id: number = 0;

  constructor(public courseService: CourseService) {}

  ngOnInit(): void {}

  deleteCourse() {
    this.courseService
      .deleteCourse(this.id)
      .subscribe((res) => console.log('delete response', res));
  }
  sharedCourse() {
    this.courseService
      .updateCourse(this.id, {
        title: this.title,
        summary: this.summary,
        shared: true,
      })
      .subscribe((res) => console.log('update response', res));
  }
}
