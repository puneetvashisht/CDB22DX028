// This is a simple javascript function.
// function add(a, b) {
//   return a + b;
// }

// Arrow Functions -->  Another syntax for declaring functions in ES6

// Functions are first-class citizens in JS. WE can assign them as values to the varibles...
let add = (a, b) => a + b;
// console.log(add(2, 3));

let sum = add; // 'sum' and 'add' are references to the same function..
// console.log(sum(2, 3));

// Callbacks..
function average(a, b, anyname) {
  return anyname(a, b) / 2; // returns the average of a and b.
}

let result = average(10, 20, sum);

console.log(result);
