/**
 * JavaScript Data Structures Practice
 * 
 * This file demonstrates the use of core data structures in JavaScript:
 * - Arrays
 * - Objects
 * - Sets
 * - Maps
 * - WeakSet
 * - WeakMap
 * 
 * Each section includes best practices and common operations.
 */

// --- Arrays ---
// Arrays are ordered collections of items (can be any type).

const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); // apple

// Add to end
fruits.push('date');
console.log(fruits); // ['apple', 'banana', 'cherry', 'date']

// Remove from end
fruits.pop();
console.log(fruits); // ['apple', 'banana', 'cherry']

// Add to start
fruits.unshift('apricot');
console.log(fruits); // ['apricot', 'apple', 'banana', 'cherry']

// Remove from start
fruits.shift();
console.log(fruits); // ['apple', 'banana', 'cherry']

// Iterate
fruits.forEach((fruit, idx) => console.log(idx, fruit));

// Map, Filter, Reduce
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // ['APPLE', 'BANANA', 'CHERRY']

const bFruits = fruits.filter(fruit => fruit.startsWith('b'));
console.log(bFruits); // ['banana']

const allFruits = fruits.reduce((acc, fruit) => acc + ', ' + fruit);
console.log(allFruits); // apple, banana, cherry

// --- Objects ---
// Objects are collections of key-value pairs.

const person = {
    name: 'Alice',
    age: 30,
    isStudent: false
};

console.log(person.name); // Alice
person.age = 31; // Update property
person['isStudent'] = true; // Update using bracket notation
console.log(person);

// Add new property
person.city = 'Istanbul';
console.log(person);

// Iterate over keys
for (const key in person) {
    console.log(key, person[key]);
}

// Object.keys, Object.values, Object.entries
console.log(Object.keys(person)); // ['name', 'age', 'isStudent', 'city']
console.log(Object.values(person)); // ['Alice', 31, true, 'Istanbul']
console.log(Object.entries(person)); // [['name', 'Alice'], ...]

// --- Sets ---
// Sets are collections of unique values.

const numbers = new Set([1, 2, 3, 3, 4]);
console.log(numbers); // Set { 1, 2, 3, 4 }

numbers.add(5);
numbers.delete(2);
console.log(numbers.has(3)); // true

// Iterate
for (const num of numbers) {
    console.log(num);
}

// --- Maps ---
// Maps are collections of key-value pairs (keys can be any type).

const capitals = new Map();
capitals.set('Turkey', 'Ankara');
capitals.set('France', 'Paris');
capitals.set('Germany', 'Berlin');

console.log(capitals.get('France')); // Paris

// Iterate
for (const [country, capital] of capitals) {
    console.log(`${country}: ${capital}`);
}

// --- WeakSet ---
// WeakSets only store objects and do not prevent garbage collection.

let obj1 = { id: 1 };
let obj2 = { id: 2 };
const weakSet = new WeakSet([obj1, obj2]);
console.log(weakSet.has(obj1)); // true

// --- WeakMap ---
// WeakMaps only allow objects as keys and do not prevent garbage collection.

const weakMap = new WeakMap();
let keyObj = {};
weakMap.set(keyObj, 'value');
console.log(weakMap.get(keyObj)); // value

// When keyObj is set to null, the entry is removed from the WeakMap (garbage collected).
keyObj = null;

// --- Summary ---
// Arrays: ordered, indexed collections
// Objects: unordered, key-value pairs
// Sets: unique values
// Maps: key-value pairs with any type of key
// WeakSet/WeakMap: for memory-sensitive object collections

