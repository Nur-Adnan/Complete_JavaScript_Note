// intro to arrays
// reference type
// how to create arrays

// ordered collection of items
let fruities = ["apple", "mango", "grapes"];
console.log(fruities[2]);

let numbers = [1, 2, 3, 4];
console.log(numbers);

let mixed = [1, 2, 2.3, "string", null, undefined];
console.log(mixed);

let fruits = ["apple", "mango", "grapes"];
let obj = {}; // object literal
console.log(fruits);
fruits[1] = "banana";
console.log(fruits);

console.log(typeof fruits); // object
console.log(Array.isArray(fruits)); // True

console.log(typeof obj);
console.log(Array.isArray(obj)); // False
