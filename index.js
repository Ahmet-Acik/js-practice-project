
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


function myFunctions(name) {
    return 'Hello ' + name;
}
console.log(myFunctions('Ahmet')); // Hello Ahmet


function myFunctionss(name, age) {
    return 'Hello ' + name + ' ' + age;
}
console.log(myFunctionss('Ahmet', 25)); // Hello Ahmet 25


function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 10)); // 50

// operators in JavaScript

let xx = 5;
let yy = 10;
console.log(xx+yy); // 15
console.log(xx-yy); // -5
console.log(xx*yy); // 50
console.log(xx/yy); // 0.5
console.log(xx%yy); // 5
console.log(xx**yy); // 9765625

xx += 5;
xx++;
++xx;
console.log(xx); // 12

yy -= 5;

let aa = 5;
let bb = '5';
console.log(aa == bb); // true compare only value truhty
console.log(aa === bb); // false compare value and type, strict equality
console.log(aa != bb); // false
console.log(aa !== bb); // true
console.log(aa < bb); // false
console.log(aa > bb); // false
console.log(aa <= bb); // true
console.log(aa >= bb); // true

let cc = true;
let dd = false;
console.log(cc && dd); // false
console.log(cc || dd); // true
console.log(!cc); // false
console.log(!dd); // true

let ee = 5;
let ff = 10;
console.log(ee == 5 && ff == 10); // true
console.log(ee == 5 && ff == 5); // false
console.log(ee == 5 || ff == 5); // true
console.log(ee == 10 || ff == 5); // false


let gg = 5;
let hh = 10;
let ii = gg > hh ? 'Yes' : 'No';
console.log(ii); // No

let jj = 5;
let kk = 10;
let ll = jj < kk ? 'Yes' : 'No';
console.log(ll); // Yes


let a = 5;
let b = 10;
console.log(a+b); // 15
console.log(a-b); // -5
console.log(a*b); // 50
console.log(a/b); // 0.5
console.log(a%b); // 5
console.log(a**b); // 9765625

a += 5;
a++;
++a;
console.log(a); // 12

b -= 5;
console.log(b); // 5

let c = 5;
let d = '5';
console.log(c == d); // true
console.log(c === d); // false
console.log(c != d); // false
console.log(c !== d); // true
console.log(c < d); // false
console.log(c > d); // false
console.log(c <= d); // true

// ternary operator

let ages = 25;
let result = ages >= 18 ? 'Adult' : 'teenager';
console.log(result); // Adult



let agess = 16;
let hasCar = true;
 if(agess >= 18 && hasCar){
    console.log('Adult with car');
    }

if(agess >= 18 && !hasCar){
    console.log('Adult without car');
    }

let aaaa ="ahmet";

const bbbb = aaaa ?? 'Hello';  // if aaaa is null or undefined, then return the default value = 'Hello'
    console.log(bbbb); // Hello