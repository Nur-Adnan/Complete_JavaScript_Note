// break keywork

// continue keyword

for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
} // Output: 1,2,3

for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    continue; // Skip 4
  }
  console.log(i);
}
