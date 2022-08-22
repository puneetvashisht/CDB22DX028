// Character Classes:

// A character class allows you to match any symbol form a certain charater set..

// \d ==>> matches a single digit form 0 to 9
// \s ===> matches a single whitespace symbol such as a space, tab , or a newline.
// \w ===> 'w' stands for word character. It matches the ASCII character [A-Z, a-z, 0-9, _]

// Examples:
// Converting  +1-(408)-555-0105    ---->>  14085550105

// let phone = "+1-(408)-555-0105";
// let regex = /\d/g;

// console.log(phone.match(regex));

// const number = phone.match(regex);

// const phoneNo = number.join(""); // join method is used to convert array to a string
// // by joining the array elements with the passed parameter to the join method..
// console.log(phoneNo);

// let str = "O2 is Oxyg7en";
// let regex = /\w\d/g;

// console.log(str.match(regex)); // match method returns an array of matches against the given regex

// let str = "ES6 Tutorial";
// let regex = /ES\d/g;

// console.log(str.match(regex)); // ES6

// Inverse Classes:
// inverse classes performs the opposite functionality of the character classes.

// \D ==>> matches a letter except a digit
// \S ==>> matches everything except whitespace
// \W ===> matches the non-latin character and spaces.

// Examples:
let phone = "+1-(408)-555-0105";
let regex = /\D/g;

console.log(phone.replace(regex, " "));
