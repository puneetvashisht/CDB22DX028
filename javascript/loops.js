// for loop...
let sum = 0;
let n = 10;

// Printing sum of  1st ten natural numbers..
for (let i = 1; i < n; i++) {
  sum += i;
}

console.log("sum of first ten natural numbers = ", sum);

// for in loop ....
// let obj = {
//   // Student Marks data
//   hardik: 90,
//   shubham: 45,
//   shivika: 78,
//   ritika: 57,
//   rahul: 47,
// };

// for (let student in obj) {
//   console.log("Marks of " + student + " are " + obj[student]);
// }

// for of loop ...

// let obj = {
//   // Student Marks data
//   hardik: 90,
//   shubham: 45,
//   shivika: 78,
//   ritika: 57,
//   rahul: 47,
// };

// for (let student of obj) {
//   // for of loop cannot iterate over objects. It can only iterate over 'ITERABLES'..
//   console.log(student);
// }
for (let student of "Hardik") {
  // Strings are iterables..
  // for of loop cannot iterate over objects. It can only iterate over 'ITERABLES'..
  console.log(student);
}
