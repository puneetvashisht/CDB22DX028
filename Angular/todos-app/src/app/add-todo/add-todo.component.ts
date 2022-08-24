import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  todo: string = '';
  @Output() add_todo = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  add() {
    console.log(this.todo);
    this.add_todo.emit(this.todo);
  }
}
