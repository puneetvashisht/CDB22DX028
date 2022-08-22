// var , let , const

// var a = 5;
// console.log(a);

// 'var' syntax used before ES6
// var a = 5;
// {
//   var a = 6; // globally scoped, not a block scoped.
//   console.log(a); // 6
// }
// console.log(a); // 6

// 'let' and 'const' syntax used from ES6

// Example of 'let'

// var a = 5;

// {
//   let a = 6; // 'let' is block scoped
//   //   changing the value
//   a = 8;
//   console.log(a); // 8
// }

// console.log(a); // 5

// Use of 'const' keyword

const a = 5;

{
  const a = 6;
  // changing the value
  //   a = 9;
  console.log(a); //
}

console.log(a); //5
