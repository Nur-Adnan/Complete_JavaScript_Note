// for loop in array

let fruits = ["apple", "mango", "grapes", "banana"];

console.log(fruits.length);
let fruits2 = [];
for (let i = 0; i < fruits.length; i++) {
  fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);
