import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.css'],
})
export class ViewTodosComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy
{
  @Input('id') id = null;
  // @Input() title = null;
  @Input() todo_status = null;
  @Output() delete_todo = new EventEmitter();
  @Output() done_todo = new EventEmitter();
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('View Todo OnChanges Called...');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('View Todo OnInit Called...');
  }

  ngDoCheck(): void {
    console.log('View Todo DoCheck Called...');
  }

  ngOnDestroy(): void {
    console.log('View Child OnDestroy Called...');
  }

  delete() {
    this.delete_todo.emit(this.id);
  }
  done() {
    this.done_todo.emit(this.id);
  }
}
