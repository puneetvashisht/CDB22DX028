// // Spread Operators Examples. (...)

// let first = [1, 2, 3];
// let second = [4, 5, 6];
// let third = [7, 8, 9];

// // let combined = first.concat(second);

// // Concatinating using spread operator. (This syntax for concatenating the array is much easier)
// let combined = [...first, ...second, ...third];
// console.log(combined);

// Cloning the arrays using spread operator..

// let first = [1, 2, 3];
// const clone = [...first];

// // adding an element to the clone array.
// clone.push(4);
// console.log(clone); // [1, 2 ,3 ,4]
// console.log(first); // [1, 2 ,3]

// Rest Operator:
function print(a, ...b) {
  console.log(a, b);
}

print(1, 2, 3, 4, 5);
