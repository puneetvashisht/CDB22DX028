// // Regex expressions :

// // 1st syntax for creating regular expression.

// // 2nd syntax for creating regular expression.
// let regex = new RegExp("hi", "i");

// let re = /hi/i;
// // Testing the strings using REg-Exp.
// let result = regex.test("HI john");

// console.log(result); // true ? // we will use flags in req-exp

// // Flags : i (ignoring cases), g (multiple matches)

// Use of exec method :

let message = "Hi, Are you there ?";
let reg = /a/i;

console.log(reg.exec(message));
