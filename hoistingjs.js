// Hoisting in JavaScript

// 1. Function declarations : Fully hoisted: Both the function's name and its definition are moved to the top of the scope.
// This allows you to call a function before it appears in the code.

sayHello("Alice"); // Output: "Hello, Alice!"

function sayHello(name) {
  console.log(`"Hello, ${name}!`);
}
// only function declaration is hoisted not function expression

//function expression is not hoisted
// sayHi("Alice"); // Output: ReferenceError: Cannot access 'sayHi' before initialization
const sayHi = function (name) {
  console.log(`"Hi, ${name}!`);
};
sayHi("Alice"); // Output: "Hi, Alice!"

// 2. Variables declared with var are hoisted to the top of the function scope.

// a. var :  Variables declared with var are Hoisted but undefined:
// The variable declaration is moved to the top, but its initialization remains in place.
// Accessing it before the initialization results in undefined

console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10

// b. let and const : Variables declared with let and const are Hoisted in the Temporal Dead Zone,
// you cannot access the let and const variable until the code reaches the line where it's declared.
// Accessing it before throws a ReferenceError.

// console.log(myLet); // Output: ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;
console.log(myLet); // Output: 20

// console.log(myConst); // Output: ReferenceError: Cannot access 'myConst' before initialization
const myConst = 30;
console.log(myConst); // Output: 30

// 3. Class declarations, Similar to let and const, class declarations are hoisted n the Temporal Dead Zone (TDZ, but are not accessible before their declaration.
// Accessing them before declaration throws a ReferenceError.

const personJ = new Person("John");
console.log(personJ); // Output: ReferenceError: Cannot access 'Person' before initialization

class Person {
  constructor(name) {
    this.name = name;
  }
}
const person = new Person("John");
console.log(person); // Output: Person { name: 'John' }

// 4. Arrow functions and function expression are not hoisted.

// greet("Alice"); // Output: ReferenceError: Cannot access 'greets' before initialization

const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

greet("Alice"); // Output: "Hello, Alice!"

// console.log(greeting); // Output: ReferenceError: Cannot access 'greeting' before initialization
const greeting = function (name) {
  console.log(`Hi, ${name}!`);
};

greeting("Tommy"); // Output: "Hi, Alice!"

//
