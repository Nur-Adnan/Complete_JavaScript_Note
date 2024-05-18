// array push pop

// array shift unshift

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
// push - To insert into the last index
fruits.push("banana");
console.log(fruits);

// pop - To delete the last index
let poppedFruit = fruits.pop();
console.log(fruits);
onsole.log("popped fruits is", poppedFruit); // grapes

// unshift - To insert into the fast index
fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);

// shift - To delete the fast index
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruits is ", removedFruit);
