// use const for creating array

// heap memory ["apple", "mango"] 0x11
// Here const is working because we don't change the address of the array.
const fruits = ["apple", "mango"]; // 0x11
fruits.push("banana");
console.log(fruits);
