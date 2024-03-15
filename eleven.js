// undefined
// null

let firstName1;
console.log(typeof firstName1); // Output: Undefined

// we can't use const with empty value
const firstName2 = "";
console.log(typeof firstName2);

firstName2 = "Adnan";
console.log(typeof firstName1, firstName2);

let myVariable = null;
console.log(myVariable);

myVariable = "Nur";
console.log(myVariable, typeof myVariable);

console.log(typeof null); // Output: Object, Wrong Output. This is Bug, Error.
// The Correct output is null.

console.log(Number.MAX_SAFE_INTEGER);

// BigInt
let myNumber = BigInt(12);
console.log(myNumber);
// Another way to use Big int
let sameMyNumber = 123n;
console.log(myNumber + sameMyNumber);
