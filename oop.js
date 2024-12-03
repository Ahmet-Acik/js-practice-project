class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  /*
    java 
    class Person{
    
        public Person(String name, int age){
            this.name = name;
            this.age = age;
        }

    }

    */

  /*
    python
class Person:

    def __init__(self, name, age, id, address):
        self.name = name # public variable
        self.age = age # public variable
        self._id = id # protected variable
        self.__address = address # private variable
*/

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  display() {
    super.display();
    console.log(`Job Title: ${this.jobTitle}`);
  }
}

const employee = new Employee("John", 30, "Developer");
employee.display();
// Output:
// Name: John, Age: 30
// Job Title: Developer

let course = {
  name: "JavaScript",
  duration: "3 months",
  topics: ["variables", "operators", "functions", "objects"],
};

for (let key in course) {
  console.log(key, course[key]);
}
for (let key in course) {
  console.log(key, course[key]);
}

for (let key in course) {
  console.log(course[key]);
}

let arrays = ["JavaScript", "Python", "Java", "C#", { name: "Ahmet" }];

let course2 = [{ name: "JavaScript", duration: "3 months" }];

course2.forEach((x,y) => console.log(x,y));

Object.entries(course2).forEach((x,y)=>console.log(x));

arrays.forEach(x => console.log(x));

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

my_dog = new Dog("Buddy", "Golden Retriever");
console.log(my_dog);
my_dog1 = new Dog("Toni", "Golden Retriever");
console.log(my_dog1);

my_array = [1, 2, 3, 4, 5];
my_second_array = [...my_array];

ahmet = "Ahmet";
ahmet.indexOf("A");

/*
// Java
String name= "Ahmet";
int age= 25;
float id = 25.233445675;
boolean isStudent = true;

System.out.println("Hello, it is me " + name + ", " + age + ", " + id);

System.out.printf("Hello, it is me %s, %d, %f.02, %b", name, age, id, isStudent);

console.log(`Hello, it is me ${name}, ${age}, ${id}`);

print(f"Hello, it is me {name}, {age}, {id}");





*/


