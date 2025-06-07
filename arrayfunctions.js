// Array Methods

// 1. Using `map` to transform an array
// This code demonstrates the use of the `map` method to transform an array by doubling each element.
const arr = [1, 2, 3];
const doubled = arr.map(x => x * 2); // [2, 4, 6]
console.log(doubled);

// 2. Using `filter` to filter elements in an array
// This code demonstrates the use of the `filter` method to filter elements in an array 
const filtered = arr.filter(x => x % 2 ===0 ); // [2]
console.log(filtered);

