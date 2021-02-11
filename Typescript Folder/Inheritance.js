var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
        console.log("This is parent class constructor");
        console.log("Hello");
    }
    return Person;
}());
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
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.display = function () {
        console.log("This is Employee Method");
    };
    Employee.prototype.Details = function () {
        console.log("This are details of Employee");
    };
    return Employee;
}());
var ITPerson = /** @class */ (function (_super) {
    __extends(ITPerson, _super);
    function ITPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITPerson.prototype.Calsalary = function () {
        return 10000;
    };
    ITPerson.prototype.display = function () {
        console.log("This is ITPerson Method");
    };
    return ITPerson;
}(Employee));
var i = new ITPerson();
console.log(i.Calsalary());
i.display();
i.Details();
