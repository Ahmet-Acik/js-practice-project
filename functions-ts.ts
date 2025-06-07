// 1. Basic Syntax

console.log("Test output"); // If you see this, your file is running!

// Function Declaration
function greetDeclared(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greetDeclared("Alice")); // Output: Hello, Alice!

// Function Expression
const greetExpressionFunc = function (name: string): string {
    return `Hello, ${name}!`;
};
console.log(greetExpressionFunc("Bob")); // Output: Hello, Bob!

// Arrow Function
const greetArrowFunc = (name: string): string => `Hello, ${name}!`;
console.log(greetArrowFunc("Charlie")); // Output: Hello, Charlie!

// 2. Type Annotations for Parameters and Return Values

// Optional Parameter
function greetOptional(name?: string): string {
    return `Hello, ${name || "Guest"}!`;
}
console.log(greetOptional()); // Output: Hello, Guest!

// Default Parameter
function greetWithDefault(name: string = "Guest"): string {
    return `Hello, ${name}!`;
}
console.log(greetWithDefault()); // Output: Hello, Guest!

// Rest Parameters
function combineStrings(...items: string[]): string {
    return items.join(", ");
}
console.log(combineStrings("apple", "banana", "cherry")); // Output: apple, banana, cherry

// Destructured Parameters
function displayUserInfo({ name, age }: { name: string; age: number }): string {
    return `${name} is ${age} years old.`;
}
const userInfo = { name: "Diana", age: 30 };
console.log(displayUserInfo(userInfo)); // Output: Diana is 30 years old.

// 3. Function Types

// Explicit Function Type
let greetTyped: (name: string) => string;
greetTyped = (name) => `Hello, ${name}!`;
console.log(greetTyped("Eve")); // Output: Hello, Eve!

// Void Return Type
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Logging this message."); // Output: Logging this message.

// Generic Function
function reverseArray<T>(items: T[]): T[] {
    return items.slice().reverse();
}
console.log(reverseArray<number>([1, 2, 3])); // Output: [3, 2, 1]
console.log(reverseArray<string>(["a", "b", "c"])); // Output: ["c", "b", "a"]

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
console.log(describe("Hello")); // Output: This is a string: Hello
console.log(describe(42)); // Output: This is a number: 42

// 4. Asynchronous Functions

// Async/Await Example (fetch is available in browser/Node 18+)
async function fetchDataFromUrl(url: string): Promise<string> {
    // In Node.js <18, use: import fetch from 'node-fetch';
    const response = await fetch(url);
    return response.text();
}
// Example usage (will fail if api.example.com is not reachable)
fetchDataFromUrl("https://api.example.com").then(console.log).catch(console.error);

// 5. Advanced Concepts

// Higher-Order Function
type Transform = (input: string) => string;
function applyTransform(input: string, transform: Transform): string {
    return transform(input);
}
const upperCase = (text: string): string => text.toUpperCase();
console.log(applyTransform("hello", upperCase)); // Output: HELLO

// Closure
function createCounter(): () => number {
    let count = 0;
    return () => ++count;
}
const incrementCounter = createCounter();
console.log(incrementCounter()); // Output: 1
console.log(incrementCounter()); // Output: 2

// Currying
function multiplyCurried(a: number): (b: number) => number {
    return (b) => a * b;
}
const doubleCurriedFn = multiplyCurried(2);
console.log(doubleCurriedFn(5)); // Output: 10

// Generator Function
function* stringGenerator(): Generator<string> {
    yield "First";
    yield "Second";
    yield "Third";
}
const stringGen = stringGenerator();
console.log(stringGen.next().value); // Output: First
console.log(stringGen.next().value); // Output: Second

// 6. Utility Types with Functions

type User = {
    name: string;
    age: number;
    email?: string;
};

function updateUser(user: User, updates: Partial<User>): User {
    return { ...user, ...updates };
}
const userPartial = { name: "Alice", age: 30 };
console.log(updateUser(userPartial, { email: "alice@example.com" }));
// Output: { name: "Alice", age: 30, email: "alice@example.com" }

function fetchUser() {
    return { id: 1, name: "Bob" };
}
type UserReturnType = ReturnType<typeof fetchUser>;
const userReturnType: UserReturnType = { id: 1, name: "Bob" };
console.log(userReturnType);

function greetParams(name: string, age: number): string {
    return `${name} is ${age} years old.`;
}
type GreetParams = Parameters<typeof greetParams>;
const args: GreetParams = ["Alice", 25];
console.log(greetParams(...args)); // Output: Alice is 25 years old.

// 7. Real-World Examples

// Debouncing
function debounceFn<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout> | undefined;
    return (...args: Parameters<T>) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}
const debouncedLog = debounceFn((message: string) => console.log(message), 500);
debouncedLog("Debounced!"); // Output after 500ms: Debounced!

// Throttling
function throttleFn<T extends (...args: any[]) => void>(func: T, limit: number): (...args: Parameters<T>) => void {
    let lastFunc: ReturnType<typeof setTimeout> | null = null;
    let lastRan: number | null = null;
    return (...args: Parameters<T>) => {
        const now = Date.now();
        if (!lastRan) {
            func(...args);
            lastRan = now;
        } else {
            if (lastFunc) clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if (now - (lastRan as number) >= limit) {
                    func(...args);
                    lastRan = now;
                }
            }, limit - (now - (lastRan as number)));
        }
    };
}
const throttledLog2 = throttleFn(() => console.log("Throttled!"), 1000);
throttledLog2();