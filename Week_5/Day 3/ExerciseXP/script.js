
// Exercise 1 :
// 1. 

function displayNumbersDivisible() {
    let numbers = []
    sumOfNumbers = 0
    for (let i = 0; i <= 500; i++) {
        if (i % 23 == 0){
            console.log(i);
            numbers.push(i)
    }
    for (let i = 0; i < numbers.length; i++) {
        sumOfNumbers += numbers[i]
    }
    console.log(sumOfNumbers);
}
displayNumbersDivisible()


// Exercise 2

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"]

function myBill(arr) {
    let totalPrice = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in stock && stock[arr[i]] > 0) {
            console.log(`${arr[i]} costs ${prices[arr[i]]}`);
            totalPrice += prices[arr[i]];
        }
    }
    console.log(totalPrice);
}

myBill(shoppingList);

//   Exercise 3

function changeEnough(itemPrice, amountOfChange) {
    sumOfChange = 0
    for (let i = 0; i <= amountOfChange.length; i++) {
        if (i == 0) {
            sumOfChange += amountOfChange[i] * 0.25
        } if (i == 1) {
            sumOfChange += amountOfChange[i] * 0.10
        } if (i == 2) {
            sumOfChange += amountOfChange[i] * 0.05
        } else {
            sumOfChange += amountOfChange[i] * 0.01
        }
        
    }
    console.log(sumOfChange)
    console.log(itemPrice <= sumOfChange);
}


// Exercise 4

function hotelCost() {
    do {
     userInput = prompt("please give us a number of nights they would like to stay in the hotel")
     numberOfDays = Number(userInput)
    } while (isNaN(numberOfDays) === true || userInput <= 0);
    return userInput *= 140
}

function planeRideCost() {
    do {
        destination = prompt("please give us the destination you wish to go to");
     } while (typeof destination !== "string" || destination.length <= 1);
    if (destination == "London") {
        return 183
     } else if (destination == "Paris") {
        return 220
    } else {
        return 300
    }
}
}

function rentalCarCost() {
    do {
        numberOfDays = prompt("please give us a number of nights they would like to stay in the hotel")
        numberOfDays = Number(numberOfDays)
       } while (isNaN(numberOfDays) === true || userInput <= 0);
       total = numberOfDays *= 40
       if (numberOfDays >= 10) {
         return total *= 0.05
       }
}

function totalVacationCost() {
    let Hotel = hotelCost()
    let Plane = planeRideCost()
    let Car = rentalCarCost()

    total = Hotel + Plane + Car
    console.log(`Total is ${total}$`)
}


totalVacationCost()


