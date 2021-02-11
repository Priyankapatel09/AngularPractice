var abc = /** @class */ (function () {
    function abc() {
        console.log("This is constructor");
    }
    abc.prototype.display = function (a, b) {
        console.log("This is 1 parameter display method");
        console.log(a);
        console.log(b);
    };
    return abc;
}());
var a = new abc();
a.display("Priya");
a.display("Patel", 100);
