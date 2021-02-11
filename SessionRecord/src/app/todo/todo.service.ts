import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  public getTodo(id: number) {
    return this.http.get<Todo>("https://jsonplaceholder.typicode.com/todos/"+id);
  }
}
