class Person
{
    constructor()
    {
        console.log("This is parent class constructor");
        console.log("Hello");
    }
}


/*
class Emp extends Person
{
    constructor()
    {
        super();
        console.log("This is child class constructor")
    }
}
var e=new Emp();*/
abstract class Employee{
    abstract Calsalary():number;
    public display()
    {
        console.log("This is Employee Method");
    }
    public Details()
    {
        console.log("This are details of Employee");
    }
}


class ITPerson extends Employee{
    Calsalary()
    {
        return 10000;
    }
    public display()
    {
        console.log("This is ITPerson Method");
    }
}
var i:Employee=new ITPerson();
console.log(i.Calsalary());
i.display();
i.Details();