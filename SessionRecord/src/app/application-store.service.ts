import { Injectable } from '@angular/core';
import { Todo } from './todo/todo';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStoreService {
  
  private todo: Todo;

  constructor() { }

  setTodo(todo: Todo) {
    this.todo = todo;
    localStorage.setItem("id",todo.id+"");
  }

  getTodo(): Todo{
    return this.todo;
  }
}
