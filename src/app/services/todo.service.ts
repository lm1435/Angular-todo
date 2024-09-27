import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NewTodo, Todo } from '../models/todo.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // behavior subject like state to store the data and continuously stream it out
  private todosSubject = new BehaviorSubject<Todo[]>([]);

  constructor(private apiService: ApiService) {
    this.loadTodos();
  }

  addTodo(title: string): void {
    const newTodo: NewTodo = { title, completed: false };
    this.apiService.addTodo(newTodo).subscribe(
      todo => {
        const currentTodos = this.todosSubject.value;
        this.todosSubject.next([...currentTodos, todo]);
      }
    );
  }

  private loadTodos(): void {
    this.apiService.getTodos().subscribe(
      todos => this.todosSubject.next(todos)
    );
  }

  updateTodo(id: number, changes: Partial<Todo>): void {
    this.apiService.updateTodo(id, changes).subscribe(
      updatedTodo => {
        const currentTodos = this.todosSubject.value;
        const index = currentTodos.findIndex(todo => todo.id === id);
        // aka has a legit id. 
        if (index !== -1) {
          currentTodos[index] = updatedTodo;
          this.todosSubject.next([...currentTodos]);
        }
      }
    );
  }

  deleteTodo(id: number): void {
    this.apiService.deleteTodo(id).subscribe(
      () => {
        const currentTodos = this.todosSubject.value;
        this.todosSubject.next(currentTodos.filter(todo => todo.id !== id));
      }
    );
  }

  getTodos(): Observable<Todo[]> {
    return this.todosSubject.asObservable();
  }
}


