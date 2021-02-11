import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/label'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'training-app';

  public emp1 : employee = {};

  public ngOnInit() {
    this.restoreState();
    // let labelObj = {name: "salman", size: 5};
    // this.printLabel(labelObj);

    // let emp : employee = {fname: "salman", lname: "sayyed", add: "Koparkhairane"};
    // this.printEmployee(emp);
    // console.log("------------------------------------------")
    // emp.add = "vashi";
    // this.printEmployee(emp);
    this.emp1.fname = "salman";
    this.emp1.lname = "sayyed";
    this.emp1.add = "koparkhairane"

    console.log("This is from parent -> "+this.emp1);
  }

  printLabel(label: {name: string, size: number}) {
    console.log(JSON.stringify(label));
  }

  printEmployee(emp: employee) {
    console.log(emp);
  }

  public restoreState() {
    if (localStorage.getItem("id")) {
      console.log(localStorage.getItem("id"));
    }
  }
 
}