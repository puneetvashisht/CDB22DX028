import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input('title') title: string = 'Default Title';
  @Input('summary') summary: string = 'Default Summary';
  @Input('shared') shared: boolean = false;
  @Output('courseDeleted') courseDeleted: EventEmitter<string> =
    new EventEmitter<string>();
  @Output('courseShared') courseShared: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  deleteCourse() {
    this.courseDeleted.emit(this.title);
  }
  sharedCourse() {
    this.courseShared.emit(this.title);
  }
}
