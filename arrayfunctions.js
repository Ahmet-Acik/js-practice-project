// Array Methods

// 1. map Transforms each element.
// This code demonstrates the use of the `map` method to transform an array by doubling each element.
const arr = [1, 2, 3, 4, 5, 6];
const doubled = arr.map(x => x * 2); // [2, 4, 6, 8, 10, 12]
console.log(doubled);

// 2. filter Filters elements by a condition.
// This code demonstrates the use of the `filter` method to filter elements in an array 
const filtered = arr.filter(x => x % 2 ===0 ); // // [2, 4, 6]
console.log(filtered);

// 3. reduce Reduces to a single value.
const sum = arr.reduce((acc, x) => acc + x, 0); // 21
console.log(sum); // Output: 21

// 4. forEach Executes a function for each element.
arr.forEach(x => console.log(x)); // Logs each element: 1, 2, 3, 4, 5, 6
