// Variables
var = variable, can be redeclared 
let = block scope, can be updated
const = constant, cannot be updated

// Data Types
String = "Hello"
Number = 123, or 123.456
Boolean = true, false

// Operators
Arithmetic Operators = +, -, *, /, %, ++, --
Assignment Operators = =, +=, -=, *=, /=, %=
Comparison Operators = ==, ===, !=, !==, >, <, >=, <=, !=, !==
// == (tries to convert it to same type, and returns true if able to convert)
Logical Operators = &&, ||, ! (and, or, not)

// Nameing
// Dont start with numbers or special characters
Camel Case = "myVariable"
Pascal Case = "MyVariable"
Snake Case = "my_variable"
Kebab Case = "my-variable"

// Functions
function myFunction() {
  // code
}

// Key Words
// break, case, catch, class, const, continue, debugger, default, delete, do, else, export, extends, finally, for, function, if, import, in, instanceof, new, return, super, switch, this, throw, try, typeof, var, void, while, with, yield

// Conditional Statements
if (condition) {
  // code
}

console.log("Hello World");
console.error("This is an error");
console.warn("This is a warning");

let str = "Hello";
let str2 = `World`;

console.log(str.length);
// string.method


let x = '10';
let y = 20;

console.log(number(x) + y);
console.log(parseInt(x) + y);
console.log(parseFloat(x) + y);

let arr = [1, 2, hello, 4, 5];

console.log(arr.length);
console.log(arr[2]);

arr[2] = 3;
// change a element of an array

// Array Methods

console.log(arr.toString());
console.log(arr.length);

arr[arr.length] = 6; // add element to the end of the array
arr[4] = 7; // add element to the end of the number
arr.pop(); // remove the last element of the array
arr.push(8); // add element to the end of the array
arr.shift(); // REMOVE the first element of the array, opposite of pop
arr.unshift('lemon'); // ADD element to the start of the array, opposite of push

// The JavaScript concat() method is used to merge two or more arrays into a single array.

let arr2 = arr.slice(1, 3); // slice the array from index 1 to 3, doesnt change original array
let arr3 = arr.splice(1, 2); // splice the array from index 1 to 2, changes original array
let arr4 = arr.concat(arr2); // merge two arrays

// Objects
let obj = {key: value};
let onj1 = new Object();

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
    adress = {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    },
    };

person.adress.state = "LA"; // change the state of the adress
person["adress"]["state"] = "LA"; // change the state of the adress
person["UserName"] = "JohnDoe"; // add a new key value pair
person.username = "JohnDoe"; // add a new key value pair, similar to the above


// Delete a key value pair
delete person.age; // delete a key value pair

console.log(person.firstName);

// Conditional Statements
if (condition) {
  // code
}

else if (condition) {
    // code
    }

else {
    // code
    }

switch (key) {
    case value:
        // code
        break;
    case value:
        // code
        break;
    default: // else, if no case is true
        // code
        break;
}

// Loops
for (let i = 0; i < 10; i++) {
    // code
}       
let users = ["John", "Jane", "Jack"];
for (let i = 0; i < users.length; i++) { // start at 0, go to the end of the array, increment by 1 each time
    console.log(users[i]); // John, Jane, Jack
}

//for in loop, you start at 0 and go to the end of the array

for (let i in users) {
    console.log(users[i]); // John, Jane, Jack
}   

// While Loop
let i = 0; // initialization, start
while (i < 10) { // condition, end
    console.log(i); // code
    i++; // increment, update
}
