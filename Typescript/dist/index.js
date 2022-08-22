"use strict";
//Basic types
let id = 5;
let empName = "Ravi";
let valid = true;
let empPerformance = 10;
//Arrays
let arr = [1, 2, 3, 4, 5];
let arr1 = ["Ravi", "Jai", "omkar"];
let arr2 = ["Ravi", 1, true];
//Tuple
let person = [5, "Ravi", true];
let persons = [
    [5, "omkar", true],
    [6, "Ravi", true],
    [7, "Jai", true],
];
//Union
let empid;
empid = 45;
//Enum
var direction1;
(function (direction1) {
    direction1[direction1["Up"] = 1] = "Up";
    direction1[direction1["Down"] = 2] = "Down";
    direction1[direction1["Left"] = 3] = "Left";
    direction1[direction1["Right"] = 4] = "Right";
})(direction1 || (direction1 = {}));
var direction2;
(function (direction2) {
    direction2["Up"] = "Up";
    direction2["Down"] = "Down";
    direction2["Left"] = "Left";
    direction2["Right"] = "Right";
})(direction2 || (direction2 = {}));
// type Emp = {             /*Type is a collection of data types */
//   email: string;        /*type can't use same name */
// };
let emp = {
    id: 1,
    name: "Ravi",
};
//Type Assertion
let cid = 1;
// let customerId = <string>cid;
let customerId = cid;
//Functions
function add(a, b) {
    return a + b;
}
//Void
function log(message) {
    console.log(message);
}
let employe = {
    id: 1,
    name: "Ravi",
    email: "test@test.com",
};
const add2 = (a, b) => a + b;
const sub = (a, b) => a - b;
//Classes
class Person {
    constructor(id, name) {
        (this.id = id), (this.name = name);
    }
    register() {
        console.log(`${this.name} is now registered `);
    }
}
const emp1 = new Person(5, "Ravi");
const emp2 = new Person(6, "omkar");
emp1.register();
emp2.register();
class productDetails {
    constructor(id, name) {
        (this.id = id), (this.name = name);
    }
}
//Subclasses
class productValue extends productDetails {
    constructor(id, name, price) {
        super(id, name);
        this.price = price;
    }
}
const p1 = new productValue(5, "pen", 10);
console.log("product p1:", p1);
// //Generics
// function getarray<T>(items: T[]): T[] {
//   return new Array().concat(items);
// }
// let numArray = getarray<number>([1, 2, 3, 4]);
// let strArray = getarray<string>(["Ravi", "Jai", "omkar"]);
// numArray.push(9);
// strArray.push("9");
