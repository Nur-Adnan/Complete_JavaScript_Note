// Typeof operator

// Data types (Primitive data types)
// String: "adnan"
// Number: 2, 4, 5.6
// Booleans: True or False
// Undefined
// Null
// BigInt
// Symbol

let age1 = 22;
let firstName = "adnan";

console.log(typeof age1);
console.log(typeof "adnan");

// 22 -> "22"
// Convert number to string.
age1 = age1 + "";
console.log(typeof age1); // "22"

// Convert string to number.
let myStr = +"34";
console.log(typeof myStr);

let age2 = "18";
age2 = Number(age2);
console.log(typeof age2); // Number
