let firstName = "      adnan      ";

console.log(firstName.length);

firstName = firstName.trim(); // "adnan"
console.log(firstName);
console.log(firstName.length);

firstName = firstName.toUpperCase();
console.log(firstName);

firstName = firstName.toLowerCase();
console.log(firstName);

// start index
// end index

let newString1 = firstName.slice(0, 4);
console.log(newString1);

let newString2 = firstName.slice(1);
// Starting 1 to end
console.log(newString2);
