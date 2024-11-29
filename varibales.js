/**
 * Demonstrates variable declaration and usage in JavaScript.
 * 
 * Variables are containers for storing data values. In JavaScript, we use the var, let, or const keyword to declare variables.
 * 
 * - var: It is the old way to declare variables in JavaScript. It is function-scoped.
 * - let: It is the new way to declare variables in JavaScript. It is block-scoped.
 * - const: It is the new way to declare variables in JavaScript. It is block-scoped. The value of a const variable cannot be changed through reassignment.
 * 
 * Examples:
 * - var name = 'Ahmet';
 * - let age = 25;
 * - const PI = 3.14;
 * 
 * Demonstrates different data types in JavaScript:
 * - String
 * - Number
 * - BigInt
 * - Boolean
 * - null
 * - undefined
 * - Symbol
 * 
 * Demonstrates object data type in JavaScript, which is a collection of key-value pairs.
 * 
 * Examples:
 * - let course = { name: 'JavaScript', duration: '3 months', isFree: true };
 * - course.name = 'React';
 * - console.log(course.name); // React
 * 
 * Demonstrates accessing and modifying object properties using dot notation and bracket notation.
 */


Example:
var name = 'Ahmet';
console.log(name);

var name = 'Mehmet';

var age = 25;

var age = 30;

var name =20;

var name =25;

console.log(age);
var isStudent = true;
console.log(isStudent);
var x = null;
console.log(x);
var y = undefined;
console.log(y);
var z = Symbol('example');
console.log(z);


// String,
let name ='Ahmet'  // let is block scoped
// let name =30 // SyntaxError: Identifier 'name' has already been declared
console.log(name);

// Number,
let age = 25;
console.log(age);

// BigInt,
let bigNumber = 12345676233567890n;
console.log(bigNumber);

// Boolean,
let isStudent = true;
console.log(isStudent);

// null,
let x = null;
console.log(x);

// undefined,
let y = undefined;
console.log(y);

// Symbol,
let z = Symbol('example');
console.log(z);


Example:
let firstName = "Ahmet";
let lastName = 'Korkmaz'; 

let fullName = firstName + ' ' + lastName;

console.log(fullName); // Ahmet Korkmaz

// const keyword is used to declare a constant variable. 
//The value of a const variable cannot be changed through reassignment.
const PI = 3.14;
console.log(PI); // 3.14
const chrismas = '25.12.2021';
console.log(chrismas); // 25.12.2021
// chrismas = '25.12.2022'; // TypeError: Assignment to constant variable.

const COLOUR = 'red';
console.log(COLOUR); // red


let favouriteFood = 'Pizza';
let favouriteFoods = "Hamburger"; 

let number1 = 25;
let number2 = 30;

let bigNumbers = 12345678901234567890n;

let isStudents = true;

let nullm = null;

let undefinedm = undefined;

let symbolm = Symbol('example');

console.log(favouriteFood);
console.log(favouriteFoods);
console.log(number1);
console.log(number2);
console.log(bigNumbers);
console.log(isStudents);
console.log(nullm);
console.log(undefinedm);
console.log(symbolm);

// Object data type in JavaScript is a collection of key-value pairs. 
// we can access the property of an object using the dot notation or the bracket notation.

let course ={
    name: 'JavaScript',
    duration: '3 months',
    isFree: true
}
course.name = 'React'; // we can change the value of a property
console.log(course.name); // React // we can access the property of an object using the dot notation
course.duration = '4 months'; // we can change the value of a property
console.log(course.duration); // 4 months
course.isFree = false; // we can change the value of a property
console.log(course['name']); // React  we can access the property of an object using the bracket notation
console.log(course['duration']); // 4 months we can access the property of an object using the bracket notation
console.log(course['isFree']); // false we can access the property of an object using the bracket notation


let courseJS = {
    name : 'JavaScript',
    duration : '3 months',
    isFree : true,
}

courseJS.name = 'React';
console.log(courseJS.name);
courseJS['duration'] = '4 months';
console.log(courseJS['duration']);

let m = 'isFree';  // we can use a variable to access the property of an object
courseJS[m] = false; // courseJS['isFree'] = false;
console.log(courseJS[m]);  // false
