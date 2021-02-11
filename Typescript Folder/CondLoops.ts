class PrimeNo
{
    constructor(public name:string)
    {
        this.name=name;
        console.log("Hello This is "+this.name);
    }
    a:number=5;
    count:number=0;
    public method(){;
    for (let index = 1; index <=this.a; index++) {
        if(this.a%index==0)
        {
           this.count ++;
        }
    }
    if(this.count==2)
    {
        console.log("Prime No");
    }
    else{
        console.log(" Not a Prime No");
    }
}
}
var xyz=new PrimeNo("Priya");
xyz.method();
