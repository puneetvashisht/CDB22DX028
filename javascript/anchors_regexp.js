// Anchors :-
// ^ (Caret anchor) -->>  This anchor matches the pattern at the beginning of the text/string..
// $ (Dollar anchor) -->> This anchor matches the pattern at the end of the text/string..

// Example of 'caret'
// let str = "Javascript";
// // console.log(/^Java/.test(str));

// // Example of 'dollar'
// console.log(/t$/.test(str));

// You will often need to use anchors ^ and $ to check if a string fully matches a pattern.
// In this pattern, we are using character classes.
let valid = /^\d\d:\d\d$/.test("13:45");

// console.log(valid); //false

// Enabling multiline mode using 'm' flag:-
// Use the 'm' flag to enable the multiline mode that instructs the ^ and $ anchors to match at the beginning
// and end of the text as well as the beginning and end of the line..

let str = `1st line
2nd line
3rd line`;

let reg = /^\d/gm;

let matches = str.match(reg);

// console.log(matches);

// Practical example:
let email = "ankur123@gmail.com";
let regex = /@gmail.com$/;

console.log(regex.test(email));
