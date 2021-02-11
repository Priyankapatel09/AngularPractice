class Test{
    name:string="Priya";
    private salary=10000;
    protected deptName="IT";
    getSalary()
    {
        return this.salary;
    }
    setSalary(salary:number)
    {
        this.salary=salary;
    }
}
var t=new Test();
t.name;
t.setSalary(16000);
t.getSalary();


class ChildTest extends Test{
    constructor()
    {
        super()
        console.log(this.deptName);
    }
}