/**
 * Comprehensive JavaScript Variable and Data Type Practice File
 * 
 * This file demonstrates best practices for variable declaration, usage, and data types in JavaScript.
 * It avoids redeclaration errors and shows modern, clean usage.
 */

// --- Variable Declarations ---

// var: function-scoped, can be redeclared and updated (not recommended in modern JS)
var userName = 'Ahmet';
console.log(userName); // Ahmet

userName = 'Mehmet'; // updating is allowed
console.log(userName); // Mehmet

// let: block-scoped, can be updated but not redeclared in the same scope
let age = 25;
console.log(age); // 25

age = 30; // updating is allowed
console.log(age); // 30

// const: block-scoped, cannot be updated or redeclared
const PI = 3.14;
console.log(PI); // 3.14

// const PI = 3.1415; // ❌ Error: Identifier 'PI' has already been declared
// PI = 3.1415; // ❌ Error: Assignment to constant variable

// --- Data Types ---

// String
let firstName = "Ahmet";
let lastName = 'Korkmaz';
let fullName = `${firstName} ${lastName}`;
console.log(fullName); // Ahmet Korkmaz

// Number
let number1 = 25;
let number2 = 30;
console.log(number1, number2); // 25 30

// BigInt (for very large integers)
let bigNumber = 12345678901234567890n;
console.log(bigNumber); // 12345678901234567890n

// Boolean
let isStudent = true;
console.log(isStudent); // true

// null (intentional absence of value)
let emptyValue = null;
console.log(emptyValue); // null

// undefined (variable declared but not assigned)
let notAssigned;
console.log(notAssigned); // undefined

// Symbol (unique and immutable value)
let uniqueId = Symbol('id');
console.log(uniqueId); // Symbol(id)

// --- Object Data Type ---

// Object: collection of key-value pairs
let course = {
    name: 'JavaScript',
    duration: '3 months',
    isFree: true
};

// Accessing and modifying properties
course.name = 'React'; // dot notation
console.log(course.name); // React

course['duration'] = '4 months'; // bracket notation
console.log(course['duration']); // 4 months

let property = 'isFree';
course[property] = false; // using variable as property key
console.log(course.isFree); // false

// --- Best Practices ---

// Prefer 'let' and 'const' over 'var' for block scoping and to avoid hoisting issues
// Use 'const' by default, only use 'let' if you need to reassign the variable
// Use descriptive variable names

// --- Example: All Data Types in One Place ---

const exampleString = "Hello, World!";
const exampleNumber = 42;
const exampleBigInt = 9007199254740991n;
const exampleBoolean = false;
const exampleNull = null;
let exampleUndefined; // undefined by default
const exampleSymbol = Symbol("desc");
const exampleObject = { key: "value" };

console.log(
    exampleString,
    exampleNumber,
    exampleBigInt,
    exampleBoolean,
    exampleNull,
    exampleUndefined,
    exampleSymbol,
    exampleObject
);
// Output: Hello, World! 42 9007199254740991 false null undefined Symbol(desc) { key: 'value' }
// Arrow function example
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};
greet("Alice"); // Output: Hello, Alice!
// Arrow function with implicit return
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8
// Function with default parameters
const multiply = (a, b = 1) => {
    return a * b;
};
console.log(multiply(5)); // Output: 5 (b defaults to 1)
// Function with rest parameters
const sum = (...numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0);
};
console.log(sum(1, 2, 3, 4)); // Output: 10
// Function with destructuring parameters
const displayUser = ({ name, age }) => {
    console.log(`Name: ${name}, Age: ${age}`);
};
displayUser({ name: "Alice", age: 30 }); // Output: Name: Alice, Age: 30
// Function with callback
const processNumbers = (numbers, callback) => {
    return numbers.map(callback);
};
const doubledNumbers = processNumbers([1, 2, 3], (num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6]
// Function with promise
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
};
fetchData().then((data) => {
    console.log(data); // Output: Data fetched successfully!
});
// Function with async/await
const fetchDataAsync = async () => {
    const data = await fetchData();
    console.log(data); // Output: Data fetched successfully!
};
fetchDataAsync();
// Function with error handling
const fetchDataWithErrorHandling = async () => {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
fetchDataWithErrorHandling();
// Output: Data fetched successfully!
// Output: Hello, Alice!
// Output: 8
// Output: 5
// Output: 10
// Output: Name: Alice, Age: 30
// Output: [2, 4, 6]
// Output: Data fetched successfully!
// Output: Data fetched successfully!
