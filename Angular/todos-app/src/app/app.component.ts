import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: any[] = [{ id: 1, title: 'todo1', status: false }];

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  doneTodo(id: number) {
    this.todos.map((todo) => {
      // let newTodo = { id: todo.id, title: todo.title, status: true };
      if (todo.id === id) {
        todo.status = true;
      }
    });
  }

  addTodo(todo: string) {
    let newTodo = { id: this.todos.length + 1, title: todo, status: false };

    this.todos = [...this.todos, newTodo];
  }
}
