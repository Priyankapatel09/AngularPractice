var PrimeNo = /** @class */ (function () {
    function PrimeNo(name) {
        this.name = name;
        this.a = 5;
        this.count = 0;
        this.name = name;
        console.log("Hello This is " + this.name);
    }
    PrimeNo.prototype.method = function () {
        ;
        for (var index = 1; index <= this.a; index++) {
            if (this.a % index == 0) {
                this.count++;
            }
        }
        if (this.count == 2) {
            console.log("Prime No");
        }
        else {
            console.log(" Not a Prime No");
        }
    };
    return PrimeNo;
}());
var xyz = new PrimeNo("Priya");
xyz.method();
