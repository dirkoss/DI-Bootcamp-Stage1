// // var num = 8;
// // var num = 10; // var variable can be declared multiple times and can be re-assigned a value and is not limited to the function scope

// // // let num = 8; // let variable cannot be declared multiple times in the same scope, but can be re-assigned a value and is limited to the function scope
// // // num = 10; 
// // console.log(num);


// // // // Variables declared with let and const keywords can have block scope. They can only be accessed in the block in which they are defined.
// // // // In contrast, the var declaration has no block scope:


// // let x = 1;
// // {
// //   let x = 2;
// // }
// // console.log("Z : ", x); //Z: 1
// // // // let is limited to the block scope

// // // // and 

// // var x = 1;
// // {
// //   var x = 2;
// // }
// // console.log("Z: ", x); //Z: 2  
// // // // var is not limited to the block scope

// // // ternary operator
// // // ? means if
// // // : means else

// // // let d = (num > 10) ? "Greater than 10" : "Less than 10";
// // // first the condition than the question mark and the first value is the true value and the second value is the false value


// // function checkYear(year) {
// //    return year > 2000 
// //     ? "You are in the 21st century"
// //     : "You live in the Middle Ages"
// }

// console.log(checkYear(2002)); // You are in the 21st century

// let name = "John";
// let last = "Doe";

// let greeting = `Hello ${name} ${last}`;

// console.log(greeting); // Hello John Doe

// Arrow functions

// function add(a, b) {
//     return a + b;
// }

// with a arrow function you don't need the function keyword and the return keyword

// let add = (a, b) => a + b;

// console.log(add(2, 3)); // 5

// and moreover, if you have one parameter you don't need the parenthesis

// let square = a => a * a;

// const calc = (a, b, operator) => 
//     operator === "+" ? a + b :
//     operator === "-" ? a - b :
//     operator === "*" ? a * b :
//     operator === "/" ? b !== 0 ? a / b : "Division by zero" :
//     "Invalid operator";

// console.log(calc(3, 6, '/')); // 8

// function nested(){
//     function inner(){
//         console.log("I am the inner function");
//     }
//     return inner;

// }

// nested()()


// currying

// function multi(a, b) {
//     return a * b;
// }

// function sum(a, b) {
//     return a + b;
// }

// function currying(f) {
//     return function(a) {
//         return function(b) {
//             return f(a, b);
//         }
//     }
// }

// let curryingMulti = currying(multi);
// let curryingSum = currying(sum);

// console.log(curryingMulti(2)(4)); // 8
// console.log(curryingSum(2)(4)); // 6

// console.log(currying(sum(2)(4)));




// By value and by reference

let a = 10;
let b = a;
b = 5;

console.log(a); // 10
console.log(b); // 5


let arr = [1, 2, 3];
let arr1 = arr;
let arr2 = [...arr]; // spread operator
arr1[1] = 5;
arr2[0] = 5;
console.log(arr); // [5, 2, 3]  because the array is a reference type and the value of arr1 is the reference of arr, same in the memory. Same in objects
console.log(arr1); // [5, 2, 3] 
console.log(arr2); // [5, 2, 3]

