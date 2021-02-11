import { Component, Input, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { employee } from '../label';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  public emp: employee = {};

  constructor(private communication: CommunicationService) { }

  ngOnInit(): void {
    

    console.log("I am from child");
    console.log(this.emp);
    this.communication.todoResponseComplete.subscribe(
      flag => console.log("this is response flag -> "+flag)
    )
  }

}
