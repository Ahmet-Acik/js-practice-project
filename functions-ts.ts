// 1. Basic Syntax

// Function Declaration
function greet1(name: string): string {
    // Returning a greeting message
    return `Hello, ${name}!`;
}
// Calling the function and logging the result
console.log(greet("Alice")); // Output: Hello, Alice!
// Key Features:
// Strong typing (name: string, : string for return type).
// All arguments and return values can have explicitly defined types.

// Function Expression
const greetExpression1 = function (name: string): string {
    // Returning a greeting message
    return `Hello, ${name}!`;
};
// Calling the function and logging the result
console.log(greetExpression("Bob")); // Output: Hello, Bob!

// Arrow Functions
const greetArrow1 = (name: string): string => `Hello, ${name}!`;
// Calling the function and logging the result
console.log(greetArrow("Charlie")); // Output: Hello, Charlie!

// 2. Type Annotations for Parameters and Return Values

// Optional Parameters
function greetOptional(name?: string): string {
    // Returning a greeting message with a default value if name is not provided
    return `Hello, ${name || "Guest"}!`;
}
// Calling the function without arguments and logging the result
console.log(greetOptional()); // Output: Hello, Guest!

// Default Parameters
function greetDefault1(name: string = "Guest"): string {
    // Returning a greeting message with a default parameter
    return `Hello, ${name}!`;
}
// Calling the function without arguments and logging the result
console.log(greetDefault()); // Output: Hello, Guest!

// Rest Parameters
function combine1(...items: string[]): string {
    // Joining all items into a single string
    return items.join(", ");
}
// Calling the function with multiple arguments and logging the result
console.log(combine("apple", "banana", "cherry")); // Output: apple, banana, cherry

// Destructured Parameters
function displayUser1({ name, age }: { name: string; age: number }): string {
    // Returning a formatted string using destructured parameters
    return `${name} is ${age} years old.`;
}
const user1 = { name: "Diana", age: 30 };
// Calling the function with an object and logging the result
console.log(displayUser(user)); // Output: Diana is 30 years old.

// 3. Function Types

// Explicit Function Type
let greetTyped: (name: string) => string;
greetTyped = (name) => `Hello, ${name}!`;
// Calling the function and logging the result
console.log(greetTyped("Eve")); // Output: Hello, Eve!

// Optional Return Type
function logMessage(message: string): void {
    // Logging the message
    console.log(message);
}
// Calling the function and logging the result
logMessage("Logging this message."); // Output: Logging this message.

// Generic Functions
function reverseArray<T>(items: T[]): T[] {
    // Reversing the array
    return items.reverse();
}
// Calling the function with different types and logging the results
console.log(reverseArray<number>([1, 2, 3])); // Output: [3, 2, 1]
console.log(reverseArray<string>(["a", "b", "c"])); // Output: ["c", "b", "a"]
// Use Case: Reusable logic for multiple data types.

// Function Overloading
function describe(input: string): string;
function describe(input: number): string;
function describe(input: any): string {
    if (typeof input === "string") {
        return `This is a string: ${input}`;
    } else if (typeof input === "number") {
        return `This is a number: ${input}`;
    }
    return "Unsupported type";
}
// Calling the overloaded function and logging the results
console.log(describe("Hello")); // Output: This is a string: Hello
console.log(describe(42)); // Output: This is a number: 42

// 4. Asynchronous Functions

// Promise-Based
function fetchData1(url: string): Promise<string> {
    // Fetching data from the URL and returning the response text
    return fetch(url).then((response) => response.text());
}
// Calling the function and logging the result
fetchData().then(console.log);

// Async/Await
async function fetchDataAsync(url: string): Promise<string> {
    // Fetching data from the URL and returning the response text
    const response = await fetch(url);
    return response.text();
}
// Calling the async function and logging the result
fetchDataAsync("https://api.example.com").then(console.log);

// 5. Advanced Concepts

// Higher-Order Functions
type Transform = (input: string) => string;

function applyTransform(input: string, transform: Transform): string {
    // Applying the transform function to the input
    return transform(input);
}
const upperCase = (text: string): string => text.toUpperCase();
// Calling the function and logging the result
console.log(applyTransform("hello", upperCase)); // Output: HELLO

// Closures
function counter1(): () => number {
    let count = 0;
    // Returning a function that increments the count
    return () => ++count;
}
const increment1 = counter1();
// Calling the returned function and logging the result
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2

// Currying
function multiply1(a: number): (b: number) => number {
    // Returning a function that multiplies by 'a'
    return (b) => a * b;
}
const double1 = multiply1(2);
// Calling the returned function and logging the result
console.log(double(5)); // Output: 10

// Generator Functions
function* generator1(): Generator<string> {
    // Yielding values one by one
    yield "First";
    yield "Second";
    yield "Third";
}
const gen1 = generator1();
// Logging the yielded values
console.log(gen.next().value); // Output: First
console.log(gen.next().value); // Output: Second

// 6. Utility Types with Functions

// Using Partial
interface User {
    name: string;
    age: number;
    email?: string;
}

function updateUser(user: User, updates: Partial<User>): User {
    // Merging the user object with updates
    return { ...user, ...updates };
}
const userPartial = { name: "Alice", age: 30 };
// Calling the function and logging the result
console.log(updateUser(userPartial, { email: "alice@example.com" }));
// Output: { name: "Alice", age: 30, email: "alice@example.com" }

// Using ReturnType
function fetchUser() {
    return { id: 1, name: "Bob" };
}

type UserReturnType = ReturnType<typeof fetchUser>;
const userReturnType: UserReturnType = { id: 1, name: "Bob" };
// Logging the user object
console.log(userReturnType);

// Using Parameters
function greetParams(name: string, age: number): string {
    // Returning a formatted string
    return `${name} is ${age} years old.`;
}

type GreetParams = Parameters<typeof greetParams>;
const args: GreetParams = ["Alice", 25];
// Calling the function with spread arguments and logging the result
console.log(greetParams(...args)); // Output: Alice is 25 years old.

// 7. Real-World Examples

// Debouncing
function debounce1<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout>;
    // Returning a debounced function
    return (...args: Parameters<T>) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}

const debouncedLog = debounce((message: string) => console.log(message), 500);
// Calling the debounced function
debouncedLog("Debounced!"); // Output after 500ms: Debounced!

// Throttling
function throttle1<T extends (...args: any[]) => void>(func: T, limit: number): (...args: Parameters<T>) => void {
    let lastFunc: ReturnType<typeof setTimeout> | null, lastRan: number | null = null;
    // Returning a throttled function
    return (...args: Parameters<T>) => {
        const now = Date.now();
        if (!lastRan) {
            func(...args);
            lastRan = now;
        } else {
            clearTimeout(lastFunc!);
            lastFunc = setTimeout(() => {
                if (now - lastRan! >= limit) {
                    func(...args);
                    lastRan = now;
                }
            }, limit - (now - lastRan!));
        }
    };
}

const throttledLog1 = throttle1(() => console.log("Throttled!"), 1000);
// Calling the throttled function
throttledLog();

// Summary

// This guide demonstrates:
// TypeScript Enhancements: Explicit typing, optional parameters, generics, utility types.
// Function Patterns: Overloading, closures, currying.
// Real-World Features: Debouncing, throttling.
// Async Handling: Promise and async/await.

// By incorporating these concepts, you'll have a strong foundation for leveraging TypeScript's type system to write robust, maintainable functions.