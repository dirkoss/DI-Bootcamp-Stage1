// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // arr.forEach(number);

// // function number(item, index, arr) {
// //     console.log(item + " is at index " + index + " in the array.");
// // }

// // // is the same as:

// // arr.forEach((item, index) => {
// //     console.log(item + " is at index " + index + " in the array.");
// // }   );


// // given n , take the sum of the digits of n and return the sum of the digits of the sum of the digits of n
// // continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// // function sumOneDigit(n) {
// //     let sum = 0;
// //     while (n > 0) {
// //         sum += n % 10;
// //         n = Math.floor(n / 10);
// //         if (n === 0 && sum > 9) {
// //             n = sum;
// //             sum = 0;
// //     }
// //     }
// //     return console.log(sum);
// // }

// // sumOneDigit(35435);

// class Animal {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }
//     getName = () => {
//         return this.name;
//     }
//     setName = (name) => {
//         this.name = name;
//     }

// }



// // let myDog = new Animal("Rex", "Dog");  //new gives us a new instance of the class
// // let myDog2 = new Animal("Max", "Dog");

// // console.log(myDog.getName());

// const Dates = ["2020-1-20", "2021-2-22", "2023-4-31"];
// // const newDates = Dates.map(formatDate);

// function formatDate(n) {
//     const newDates = n.split("-");
//     return console.log(newDates)
// }

// // function formatDate(n) {
// //     const newDates = n.split("-");
// //     return `${newDates[2]}/${newDates[1]}/${newDates[0]}`;
// // }


// console.log(formatDate(Dates))
// // console.log(newDates);


let chunk = 2;

// Input array
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Splitted arrays
let arr1 = arr.slice(0, chunk);
let arr2 = arr.slice(0, chunk);
let arr3 = arr.slice(0, chunk);
let arr4 = arr.slice(0, chunk);

// Display output
console.log("Array1: " + arr1);
console.log("Array2: " + arr2);
console.log("Array3: " + arr3);
console.log("Array4: " + arr4);
