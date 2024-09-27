import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { TodoFacade } from '../../facades/todo.facade';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
  //no need to unsub on destroy because of the async pipe on the html. :) hacks
  todos$: Observable<Todo[]>;

  constructor(private todoFacade: TodoFacade) {
    this.todos$ = this.todoFacade.getTodos();
  }

  addTodo(title: string): void {
    this.todoFacade.addTodo(title);
  }

  updateTodo(id: number, changes: Partial<Todo>): void {
    this.todoFacade.updateTodo(id, changes);
  }

  deleteTodo(id: number): void {
    this.todoFacade.deleteTodo(id);
  }
}