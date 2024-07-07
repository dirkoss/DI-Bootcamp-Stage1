// // 🌟 Exercise 1 SCOPE

// // 1.1

// // The message "inside the funcOne function 3" will be printed in an alert box, because a is larger than 1 and then get reassinged to 3.
// // Reassignment is possible with a let variable.

// // 2.1

// // funcThree() should give an alert box with the message "inside the funcThree function 0",
// // because the variable a is not reassigned in funcTwo(). and the let has a global scope.

// // funcTwo() should not give a result (only assing the value 5 to a).

// // funcThree() should (after funcTwo() is called) give an alert box with the message "inside the funcThree function 5",
// // because the variable a is reassigned in funcTwo().

// // 3.1

// // funcFour(); should not give a result (only assing the value "hello" to a).
// // funcFive(); should give an alert box with the message "inside the funcFive function hello", because a is a global variable.

// // 4.2 

// //  if a const variable is declared in a function, it will not be reassigned in the function, but it can be reassigned in a nested function.

// // 5.2

// //  if a const variable would be used you would get the outside the function message with a=2,
//     // because the variable is not reassigned in the function.


// // 🌟 Exercise 2 : Ternary Operator

// // function winBattle(){
// //     return true;
// // }

// // 2.1

// // winBattle => true

// // 2.2 & 2.3

// // let experiencePoints = winBattle() ? 10 : 1;

// // 2.3

// // console.log(experiencePoints);


// // 🌟 Exercise 3 : Is It A String ?

// // isString = (str) => typeof str == "string" ? console.log("True") : console.log("False");


// // 🌟 Exercise 4 : Find The Sum

// // let sum = (a, b) => typeof a == "number" && typeof b == "number" ? console.log(a + b) : console.log("Sorry but you can only add numbers");


// // 🌟  Exercise 5 : Kg And Grams

// // multiple optionalities, maybe in wrong order:

// // let calcWeight1 = (kg) => console.log(kg * 1000);

// // const calcWeight2(kg) {
// //     return kg * 1000;
// // }

// // function calcWeight3(kg) {
// //     return kg * 1000;
// // }


// // 🌟 Exercise 6 : Fortune Teller

// // (function(){ 
// //     let numChildren = 4;
// //     let partnerName = "Maria";
// //     let geoLocation = "Amsterdam";
// //     let jobTitle = "developer";
// //     console.log(`You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`);
// // })();


// // 🌟 Exercise 7 : Welcome

// (function welcome = (name) => {
//     return `Welcome ${name}`;
// })("Dirk");


// (function () {
//     user = 'Dirk';
//     let div = document.createElement('div');
//     let name = document.createElement('span');
//     name.innerText = user;

//     let imgElement = document.createElement('img');
//     img.setAttribute("src","https://cdn-icons-png.flaticon.com/256/1144/1144760.png");
//     img.style.borderRadius = '50%';
//     img.style.height = '2rem';
//     img.style.width = '2rem';

//     div.setAttribute("id","user-section")
//     div.appendChild(name);
//     div.appendChild(img);

//     let navElement = document.getElementsByTagName('nav')[0];
//     navElement.appendChild(divElement);
// })();


// // 🌟 Exercise 8 : Juice Bar nested functions



// function makeJuice(size) {
//     let size = small

// }
    

// function makeJuice(sizeOfBeverage){
//     let ingredients = []

//     addIngredients('Celery','Carrot','Ginger');
//     addIngredients('Water','Sugar','Milk');
//     displayJuice();

//     function addIngredients(ing1,ing2,ing3){
//         ingredients.push(ing1,ing2,ing3);
//     }

//     function displayJuice(){
//         msg = `The client wants a ${sizeOfBeverage} juice, containing `
//         for (let ing of ingredients){
//             msg += ing + ', '
//         }
//         let pElement = document.createElement('p');
//         pElement.innerText = msg
//         let bodyElement = document.getElementsByTagName('body')[0];
//         bodyElement.appendChild(pElement);
//     }
    
// }

// makeJuice('small');

