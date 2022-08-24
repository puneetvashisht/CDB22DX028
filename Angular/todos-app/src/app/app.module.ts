import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ViewTodosComponent } from './view-todos/view-todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ViewTodosComponent, AddTodoComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
