import { Component, OnInit } from '@angular/core';
import { ApplicationStoreService } from '../application-store.service';
import { CommunicationService } from '../communication.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public data = {};
  constructor(
    private store: ApplicationStoreService,
    private communication: CommunicationService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.getUser(4);
    this.communication.todoResponseComplete.subscribe(
      flag => {
        if (flag) {
          // console.log("I ma from user details -> "+ this.store.todo);
          console.log("This is user details response")
          this.getUser(this.store.getTodo().userId);
        }
      }
    )
  }

  public getUser(id: number) {
    this.userService.getUser(id).subscribe(
      (data) => {
        this.data = data;
        console.log(data);
      }
    )
  }

}
