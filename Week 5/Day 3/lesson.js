// console.log("Hello, World!");
// console.log("Hello, World!");


// function hello() {
//     console.log("Hello, World!");
//     console.log("Dirk!");
// }

// hello();

// function sum(a, b) {
//     console.log(a + b); // only one return statement
// }

// sum("a", 2); //string will 


// function example(x, y) {
//     if (x > y) return x;
//     return y; // else is not needed
// }   

// example(2, 3);
// console.log(example(4, 3));



// function greet(name, greeting = "Welcome!!") { // default value = "Welcome"
//     return `Hello ${name}!, ${greeting}`;
// }   

// console.log(greet("Dirk", "How are you?")); // Hello, Dirk! How are you?
// console.log(greet("Dirk")); // Hello, Dirk! Welcome!!


// function greet(name, greeting) { // default value = "Welcome"
//     if (greeting === undefined) {
//         greeting = "Hi!!";
//     }
//     return `Hello ${name}!, ${greeting}`;
// }   

// // console.log(greet("Dirk", "How are you?")); // Hello, Dirk! How are you?
// // console.log(greet("Dirk")); // Hello, Dirk! Hi!!


// function getFullName(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }

// console.log(getFullName("Dirk", "Ultee")); // Dirk Hoekstra

// function test() {
//     console.log("before");
//      // exception
//     a
//     console.log("after");
// }

// test();

// try {
//     console.log("before");
//     a
//     console.log("after");
// }   

// catch (error) {
//     console.log("error");

// }

// throw new Error("This is an error");

// Object methods - this keyword similar to self in Python

// let obj = {
//     a : 1,
//     b : 2,
//     sum : function() {
//         console.log(this.a + this.b);
//     }
// }
// // obj.sum();

// // DOM - Document Object Model
// // find elements by id

// console.log("Hello, World!");
// let div = document.getElementById('h2infirstdiv');

// console.log(div);

// // find elements by tag name
// let divs = document.getElementsByTagName('div');
// console.log(divs);

// // find elements by class name
// let divs2 = document.getElementsByClassName('third');
// console.log(divs2[0]); // first element with class name third


// // find elements by query selector
// let divs3 = document.querySelector('div'); // first div element . for class, # for id
// console.log(divs3);

// let divs4 = document.querySelectorAll('div');    // all div elements
// console.log(divs4); 

// change the text of an element
// textContent, innerText, innerHTML // innerHTML can be used to add html elements

let h2 = document.getElementById('h2infirstdiv');
h2.innerHTML = "Hello, World!";
// h2.textContent = "Hello, World!";
// h2.innerHTML = "Hello, World!";

h2.setAttribute('style', 'color: red;');

// parentnode, childnodes, firstchild, lastchild, nextsibling, previousibling
let div = document.getElementById('firstdiv');

console.log(div.childNodes);

// next element sibling and previous element sibling
let h2 = document.getElementById('h2infirstdiv');
console.log(h2.nextElementSibling);









