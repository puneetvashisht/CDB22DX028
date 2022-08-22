// New way of writing strings..

let price = 10;
let VAT = 0.25;

// String Interpolation: Automatic replacement of variables with real values within the string iteself..
let total = `Total: ${price * (1 + VAT)}`; //

console.log(total);
