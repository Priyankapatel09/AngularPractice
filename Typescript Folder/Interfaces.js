"use strict";
exports.__esModule = true;
exports.Emp = void 0;
var Emp = /** @class */ (function () {
    function Emp() {
        this.name = "Priya";
        this.address = "Nerul";
    }
    Emp.prototype.getSalary = function () {
        return 20000;
    };
    return Emp;
}());
exports.Emp = Emp;
var Emp2 = {
    name: "Hasi",
    address: "Nerul",
    getSalary: function () {
        console.log("This is GetSalary Method");
        return 30000;
    }
};
console.log(Emp2.getSalary());
console.log(Emp2);
