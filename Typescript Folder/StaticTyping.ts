class abc
{
    constructor()
    {
        console.log("This is constructor");
    }
    public display(a:string,b?)
    {
        console.log("This is 1 parameter display method");
        console.log(a);
        console.log(b);
    }
}
var a=new abc();
a.display("Priya");
a.display("Patel",100);