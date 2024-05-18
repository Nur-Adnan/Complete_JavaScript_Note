// for of loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for (let fruit of fruits) {
  fruits2.push(fruit.toUpperCase());
}
console.log(fruits2); // For of use for value and for in is use for index

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
