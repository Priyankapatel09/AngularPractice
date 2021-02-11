export interface EmpDetails{
    name:string;
    address:string;
    getSalary():number;
}
export class Emp implements EmpDetails{
    name="Priya";
    address="Nerul";
    getSalary()
    {
        return 20000;
    }
}

var Emp2: EmpDetails ={                  //creating object of interface and directly implementing the interface
name :"Hasi",                                 //Anonymous concept
address:"Nerul",
getSalary(){
    console.log("This is GetSalary Method")
    return 30000;
}
}
console.log(Emp2.getSalary());
console.log(Emp2);