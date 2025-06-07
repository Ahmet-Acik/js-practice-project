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

// 5. find / findIndex Finds the first element (or its index) matching a condition.
const firstEven = arr.find(x => x % 2 === 0); // 2
console.log(firstEven); // Output: 2
const firstEvenIndex = arr.findIndex(x => x % 2 === 0); // 1
console.log(firstEvenIndex); // Output: 1

// 6. some / every Checks if some or all elements match a condition.
const hasEven = arr.some(x => x % 2 === 0); // true
console.log(hasEven); // Output: true
const allEven = arr.every(x => x % 2 === 0); // false
console.log(allEven); // Output: false

//7. flatMap Maps and flattens one level.
const nestedArr = [[1, 2], [3, 4], [5, 6]];
const flatMapped = nestedArr.flatMap(x => x.map(y => y * 2)); // [2, 4, 6, 8, 10, 12]
console.log(flatMapped); // Output: [2, 4, 6, 8, 10, 12]

// 8. sort Sorts elements in place.
const sorted = arr.slice().sort((a, b) => a - b); // [1, 2, 3, 4, 5, 6]
console.log(sorted); // Output: [1, 2, 3, 4, 5, 6]

// 9. slice Creates a shallow copy of a portion of an array.
const sliced = arr.slice(1, 4); // [2, 3, 4]
console.log(sliced); // Output: [2, 3, 4]

// 10. splice Adds/removes elements from an array.
const spliced = arr.slice(); // Create a copy of the original array
spliced.splice(2, 2, 10, 20); // Removes 2 elements at index 2 and adds 10, 20
console.log(spliced); // Output: [1, 2, 10, 20, 5, 6]

// 11. concat Combines two or more arrays.
const arr2 = [7, 8, 9];
const concatenated = arr.concat(arr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concatenated); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 12. includes Checks if an array contains a value.
const includesValue = arr.includes(3); // true
console.log(includesValue); // Output: true

// 13. distinct Creates a new array with unique values.
const distinctArr = [...new Set(arr)]; // [1, 2, 3, 4, 5, 6]
console.log(distinctArr); // Output: [1, 2, 3, 4, 5, 6]

// 14.limit / skip Creates a new array with a limited number of elements or skips a specified number of elements.
const limited = arr.slice(0, 3); // [1, 2, 3]
console.log(limited); // Output: [1, 2, 3]
const skipped = arr.slice(3); // [4, 5, 6]
console.log(skipped); // Output: [4, 5, 6]