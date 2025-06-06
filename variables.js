// Primitive data types: string, number, boolean, null, undefined, symbol

// String
let name = "Ahmet";
console.log(name);
console.log(typeof name);

// Number
let age = 25;
console.log(age);
console.log(typeof age);

// Boolean
let isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);

// Null
let x = null;
console.log(x);
console.log(typeof x);

// Undefined
let und;
let y = undefined;
console.log(y);
console.log(typeof y);

// Symbol
let z = Symbol("example"); // unique value that's used as an identifier for object properties
console.log(z);
console.log(typeof z);

// Reference data types: object, array, function

// Object

let course = {
  name: "JavaScript",
  duration: "3 months",
  topics: ["variables", "loops", "functions"],
  isCompleted: true,
};

console.log(course);
console.log(typeof course);
console.log(course.name);
console.log(course["duration"]);
console.log(course.topics);
console.log(course.isCompleted);

let pLanguage = "JavaScript";
let nLanguage = pLanguage; // Copy by Value; changing the value of pLanguage does not affect nLanguage
console.log(pLanguage, nLanguage);

pLanguage = "Python";
console.log(pLanguage, nLanguage);

// Number Copy by Value
let num1 = 5;
let num2 = num1;
console.log(num1, num2);

num1 = 10;
console.log(num1, num2);

// String Copy by Value
myName = "Ahmet";
newName = myName;
console.log(myName, newName);

myName = "Mehmet";
console.log(myName, newName);

// boolean Copy by Value
let isStudent1 = true;
let isStudent2 = isStudent1;

console.log(isStudent1, isStudent2);

isStudent1 = false;
console.log(isStudent1, isStudent2);

console.log(course.name);
let pCourse = course; // Copy by Reference; changing the value of course affects pCourse
course.name = "React";
console.log(course, pCourse);

// Object Copy by Reference
let language = {
  name: "JavaScript",
};

let newLanguage = language;

console.log(language, newLanguage); // { name: 'JavaScript' } { name: 'JavaScript' }

language.name = "Python";
language["name"] = "Python";

console.log(language, newLanguage); // { name: 'Python' } { name: 'Python' }

// Array Copy by Reference
let myArray = [1, 2, 3, 4, 5];
let newArray = myArray;

console.log(myArray, newArray); // [1, 2, 3, 4, 5] [1, 2, 3, 4, 5]

myArray[0] = 100;
console.log(myArray, newArray); // [100, 2, 3, 4, 5] [100, 2, 3, 4, 5]

// Function Copy by Reference
function myFunction() {
  return "Hello World";
}

let newFunction = myFunction;
console.log(myFunction(), newFunction()); // Hello World Hello World

function myFunction() {
  return "Hello JavaScript";
}

console.log(myFunction(), newFunction());  // Hello JavaScript Hello JavaScript

// Primitive data types are immutable, meaning that they cannot be changed once they are created.
// Reference data types are mutable, meaning that they can be changed after they are created.


// Arrays in JavaScript

let mylist = ['Ahmet', 'Mehmet', 'Ali', 'Veli'];
console.log(mylist); // [ 'Ahmet', 'Mehmet', 'Ali', 'Veli' ]
console.log(mylist[0]); // Ahmet
console.log(mylist[1]); // Mehmet

let mylists = [{age: 23}, 'Mehmet', 'Ali', 'Veli'];
console.log(mylists); // [ { name: 'Ahmet' }, 'Mehmet', 'Ali', 'Veli' ]
console.log(mylists[0]); // { name: 'Ahmet' }
console.log(mylists.length); // 4


// functions in JavaScript
function myFunction() {
    return 'Hello World';
}
console.log(myFunction()); // Hello World

function createCourse(name) {
    return `${name} Course is created`;
}
console.log(createCourse('JavaScript')); // JavaScript Course is created
console.log(createCourse('Python')); // Python Course is created

// Hoisting in JavaScript

console.log(numx); // undefined
var numx = 5;  // var vs let vs const  // var is function scoped and let, const are block scoped 

console.log(numx); // 5

// console.log(numy); // ReferenceError: Cannot access let and const, so 'numy' before initialization
let numy = 10;

console.log(numy); // 10

//function scope vs block scope

// block Scope
if (true) {
    var a = 5;
    let y = 10;
    const z = 15;
}
console.log(a); // 5
// console.log(y); // ReferenceError: y is not defined
// console.log(z); // ReferenceError: z is not defined


// function Scope

function myFunction() {
    var a = 5;
    let y = 10;
    const z = 15;
}
// console.log(a); // ReferenceError: x is not defined
// console.log(y); // ReferenceError: y is not defined
// console.log(z); // ReferenceError: z is not defined

// Example of using readline to get user input in Node.js
// This code demonstrates how to use the readline module in Node.js to get user input from the console.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter your name: ", (userInput) => {
  console.log(`Hello, ${userInput}!`);
  readline.question("Enter your age: ", (userAge) => {
    let ageInput = Number(userAge);
    console.log(`You are ${ageInput} years old.`);
    readline.question("Are you a student? (yes/no): ", (isStudentInput) => {
      let isStudentReplay = isStudentInput.toLowerCase() === "yes";
      console.log(`Is student: ${isStudentReplay}`);
      readline.close();
    });
  });
});