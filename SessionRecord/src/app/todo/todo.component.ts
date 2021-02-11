import { Component, OnInit } from '@angular/core';
import { ApplicationStoreService } from '../application-store.service';
import { CommunicationService } from '../communication.service';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public id: number;
  public todo: Todo;
  constructor(
    private todoService: TodoService, 
    private communicate: CommunicationService,
    private store: ApplicationStoreService) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.getTodo();
    // },2000);
  }

  public getTodo(id: number) {
    this.todoService.getTodo(id).subscribe(
      (todo)=> { 
        this.todo = todo;
        console.log(todo.title);
        console.log(todo)
        console.log("I am after service call");
        this.store.setTodo(todo);
        this.communicate.todoResponseComplete.next(true);
      },
      () => {
        console.log(" I am complete block");
      }
    );

    
  }

}
