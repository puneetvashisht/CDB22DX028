//Basic types
let id: number = 5;
let empName: string = "Ravi";
let valid: boolean = true;
let empPerformance = 10;

//Arrays

let arr: number[] = [1, 2, 3, 4, 5];
let arr1: string[] = ["Ravi", "Jai", "omkar"];
let arr2: any[] = ["Ravi", 1, true];

//Tuple
let person: [number, string, boolean] = [5, "Ravi", true];
let persons: [number, string, boolean][] = [
  [5, "omkar", true],
  [6, "Ravi", true],
  [7, "Jai", true],
];

//Union
let empid: number | string;
empid = 45;

//Enum
enum direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
enum direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

//Objects
type Emp = {
  id: number;
  name: string;
};
// type Emp = {             /*Type is a collection of data types */
//   email: string;        /*type can't use same name */
// };
let emp: Emp = {
  id: 1,
  name: "Ravi",
};

//Type Assertion
let cid: any = 1;
// let customerId = <string>cid;
let customerId = cid as number;

//Functions

function add(a: number, b: number): number {
  return a + b;
}

//Void

function log(message: string): void {
  console.log(message);
}

//Interfaces

interface Employee {
  //Types can't be used to declare with same names but interface can
  readonly id: number;
  name: string;
}

interface Employee {
  email?: string;
}

let employe: Employee = {
  id: 1,
  name: "Ravi",
  email: "test@test.com",
};

//functional Interface
interface Mathfunc {
  (x: number, y: number): number;
}
const add2: Mathfunc = (a: number, b: number): number => a + b;
const sub: Mathfunc = (a: number, b: number): number => a - b;

//Classes

class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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

// console.log("emp1", emp1);
// console.log("emp2", emp2);

//Class Interface
interface product {
  id: number;
  name: string;
}

class productDetails implements product {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    (this.id = id), (this.name = name);
  }
}

//Subclasses
class productValue extends productDetails {
  price: number;
  constructor(id: number, name: string, price: number) {
    super(id, name);
    this.price = price;
  }
}
const p1 = new productValue(5, "pen", 10);
console.log("product p1:", p1);

//Generics
function getarray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getarray<number>([1, 2, 3, 4]);
let strArray = getarray<string>(["Ravi", "Jai", "omkar"]);

numArray.push(9);
strArray.push("9");
