import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoFacade {
  constructor(private todoService: TodoService) {}

  getTodos(): Observable<Todo[]> {
    return this.todoService.getTodos();
  }

  updateTodo(id: number, changes: Partial<Todo>): void {
    this.todoService.updateTodo(id, changes);
  }

  addTodo(title: string): void {
    this.todoService.addTodo(title);
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }
}