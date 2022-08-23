import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input('title') title: string = 'Default Title';
  @Input('summary') summary: string = 'Default Summary';
  @Output('courseDeleted') courseDeleted: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  deleteCourse() {
    this.courseDeleted.emit(this.title);
  }
}
