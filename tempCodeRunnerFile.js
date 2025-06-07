// Array Methods

// 1. Using `map` to transform an array
// This code demonstrates the use of the `map` method to transform an array by doubling each element.
const arr = [1, 2, 3, 4, 5, 6];
const doubled = arr.map(x => x * 2); // [2, 4, 6, 8, 10, 12]
console.log(doubled);

// 2. Using `filter` to filter elements in an array
// This code demonstrates the use of the `filter` method to filter elements in an array 
const filtered = arr.filter(x => x % 2 ===0 ); // // [2, 4, 6]
console.log(filtered);

// 3. Using `reduce` to accumulate values in an array
const sum = arr.reduce((acc, x) => acc + x, 0); // 21
console.log(sum); // Output: 21