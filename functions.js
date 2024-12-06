// 1. Basic Syntax of Functions

// Function Declaration
function greet(name) {
  
  return `Hello, ${name}!`; // Returning a greeting message
}
// Calling the function and logging the result
console.log(greet("Alice")); // Output: Hello, Alice!
// Use Case: Reusable code for a specific task.
// Key Features: Hoisted (can be called before declaration).


// Function Expression
const greetExpression = function (name) {
  
  return `Hello, ${name}!`; // Returning a greeting message
};
// Calling the function and logging the result
console.log(greetExpression("Bob")); // Output: Hello, Bob!
// Use Case: Dynamic assignment of functions or closures.
// Key Features: Not hoisted.

// Arrow Functions
const greetArrow = (name) => `Hello, ${name}!`;
// Calling the function and logging the result
console.log(greetArrow("Charlie")); // Output: Hello, Charlie!
// Use Case: Short syntax for callbacks and one-liner logic.
// Key Features: Inherits 'this' from the lexical scope, cannot be used as constructors.

// Anonymous Functions
// Used when a function doesn't need a name, such as in callbacks.
setTimeout(function () {
  // Logging a delayed message
  console.log("This is a delayed message.");
}, 1000);
// Use Case: Event handlers, asynchronous operations.

// Named Function Expression
const factorial = function fact(n) {
  // Recursive function to calculate factorial
  return n <= 1 ? 1 : n * fact(n - 1);
};
// Calling the function and logging the result
console.log(factorial(5)); // Output: 120
// Use Case: Useful for recursion within expressions.

// 2. Parameters and Arguments

// Default Parameters
function greetDefault(name = "Guest") {
  // Returning a greeting message with a default parameter
  return `Hello, ${name}!`;
}
// Calling the function without arguments and logging the result
console.log(greetDefault()); // Output: Hello, Guest!

// Rest Parameters
function combine(...items) {
  // Joining all items into a single string
  return items.join(", ");
}
// Calling the function with multiple arguments and logging the result
console.log(combine("apple", "banana", "cherry")); // Output: apple, banana, cherry
// Use Case: Handling a dynamic number of arguments.

// Destructured Parameters
function displayUser({ name, age }) {
  // Returning a formatted string using destructured parameters
  return `${name} is ${age} years old.`;
}
const user = { name: "Diana", age: 30 };
// Calling the function with an object and logging the result
console.log(displayUser(user)); // Output: Diana is 30 years old.
// Use Case: Working with structured data like objects.

// 3. Return Values

// Single Return
function square(num) {
  // Returning the square of the number
  return num * num;
}
// Calling the function and logging the result
console.log(square(4)); // Output: 16

// Multiple Values Using Objects
function getCoordinates() {
  // Returning an object with coordinates
  return { x: 10, y: 20 };
}
const { x, y } = getCoordinates();
// Logging the destructured values
console.log(x, y); // Output: 10 20

// 4. Function Types

// Callback Functions
// A function passed as an argument.
function processData(data, callback) {
  // Processing data and calling the callback with the result
  const processed = data.map((item) => item.toUpperCase());
  callback(processed);
}
// Calling the function with data and a callback
processData(["apple", "banana"], (result) => console.log(result)); // Output: ["APPLE", "BANANA"]

// Immediately Invoked Function Expressions (IIFE)
(function () {
  // Logging a message immediately
  console.log("This function runs immediately!");
})();
// Use Case: Module pattern, avoiding variable pollution.

// Generator Functions
function* generator() {
  // Yielding values one by one
  yield "First";
  yield "Second";
  yield "Third";
}
const gen = generator();
// Logging the yielded values
console.log(gen.next().value); // Output: First
console.log(gen.next().value); // Output: Second
// Use Case: Lazy iteration over data, asynchronous tasks.


// Mocking fetch for testing purposes
global.fetch = async (url) => {
  if (url === "https://api.example.com/data") {
    return {
      json: async () => ({ message: "Mocked data" })
    };
  }
  throw new Error("Invalid URL");
};

// Async/Await
async function fetchData() {
  // Fetching data from a mocked API
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}
// Calling the async function and logging the result
fetchData().then(console.log).catch(console.error);
// Use Case: Simplified handling of asynchronous operations.

// 5. Higher-Order Functions

// Definition: A function that takes another function as an argument or returns a function.
// Example: Array Methods
const numbers = [1, 2, 3, 4, 5];
// Using map to double each number
const doubled = numbers.map((num) => num * 2);
// Logging the result
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Example: Returning Functions
function multiplier(factor) {
  // Returning a function that multiplies by the given factor
  return (num) => num * factor;
}
const double = multiplier(2);
// Calling the returned function and logging the result
console.log(double(5)); // Output: 10

// 6. Closures

function counter() {
  let count = 0;
  // Returning a function that increments the count
  return function () {
    count++;
    return count;
  };
}
const increment = counter();
// Calling the returned function and logging the result
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2
// Use Case: Encapsulation and private variables.

// 7. Recursion

function fibonacci(n) {
  // Base case for recursion
  if (n <= 1) return n;
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// Calling the function and logging the result
console.log(fibonacci(5)); // Output: 5
// Use Case: Solving problems with repetitive substructures.

// 8. Function Context (this)

// Regular Function
const userRegular = {
  name: "Eve",
  greet() {
    // Logging a greeting message using 'this'
    console.log(`Hello, ${this.name}!`);
  },
};
userRegular.greet(); // Output: Hello, Eve!

// Arrow Function
const userArrow = {
  name: "Eve",
  greet: () => console.log(`Hello, ${this.name}!`),
};
userArrow.greet(); // Output: Hello, undefined!
// Key Difference: Arrow functions inherit 'this' from the parent scope.

// 9. Function Currying

function multiply(a) {
  // Returning a function that multiplies by 'a'
  return function (b) {
    return a * b;
  };
}
const doubleCurried = multiply(2);
// Calling the returned function and logging the result
console.log(doubleCurried(4)); // Output: 8
// Use Case: Partial application of functions.

// 10. Advanced Use Cases

// Debouncing
function debounce(func, delay) {
  let timer;
  // Returning a debounced function
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}
const logDebounced = debounce(() => console.log("Debounced!"), 500);
// Calling the debounced function
logDebounced();
// Use Case: Limiting frequent events like scroll or input.

// Throttling
function throttle(func, limit) {
  let lastFunc, lastRan;
  // Returning a throttled function
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
const throttledLog = throttle(() => console.log("Throttled!"), 1000);
// Calling the throttled function
throttledLog();
// Use Case: Controlling execution of expensive operations.