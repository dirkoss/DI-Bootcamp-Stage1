var num = 8;
var num = 10; // var variable can be declared multiple times and can be re-assigned a value and is not limited to the function scope

// let num = 8; // let variable cannot be declared multiple times but can be re-assigned a value and is limited to the function scope
// num = 10; 
console.log(num);


// // Variables declared with let and const keywords can have block scope. They can only be accessed in the block in which they are defined.
// // In contrast, the var declaration has no block scope:


let x = 1;
{
  let x = 2;
}
console.log("Z : ", x); //Z: 1
// // let is limited to the block scope

// // and 

var x = 1;
{
  var x = 2;
}
console.log("Z: ", x); //Z: 2  
// // var is not limited to the block scope