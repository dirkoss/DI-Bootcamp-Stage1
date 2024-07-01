//  Exercise 1 

// Part 1
const people = ["Greg", "Mary", "Devon", "James"];



// 1.
people.shift();

// 2.
let james = people.indexOf("James");
people[james] = "Jason"


// 3.
people.push("Adam Yonah");

// 4.
console.log(people.indexOf("Mary"))

// 5.
copyOfPeople = people.slice(1, 3)

// 6.
console.log(people.indexOf("foo"))

// 7.
let last = people[people.length - 1]


// Part II 

// 1. 
for(let person of people) {
    console.log(person);
}

// 2.
for(let person of people) {
    console.log(person);
    if (person == "Devon") {
        break
    }
}






// Exercise 2 

// 1.
const colors = ["Silver", "Yellow", "Grey", "Green"]

// 2.
for(let i = 0; i < colors.length; i++) {
console.log(`My #${i + 1} choice is ${colors[i]}`)
}

// 3.
const place = ["1st", "2nd", "3rd", "4th"]
for(let i = 0; i < colors.length; i++) {
    console.log(`My ${place[i]} choice is ${colors[i]}`)
    }



// Exercise 3

// 1.
let userNumber = 0
do {
    let numberChoice = prompt("Please enter a number", 0);
    userNumber = Number(numberChoice);
  }
  while (userNumber < 10);
//     While the number is smaller than 10 continue asking the user for a new number.

//     Tip : Which while loop is more relevant for this situation?


// Exercise 4 

// 1.
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


// 2.
console.log(building.numberOfFloors);


// 3.
console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor);

// 3.
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);

// 4.
console.log(building.numberOfRoomsAndRent.david[1] + building.numberOfRoomsAndRent.sarah[1] > building.numberOfRoomsAndRent.dan[1]);



// Exercise 5 

// 1.
const family = {
    father: "Mike",
    mother : "Dian",
    brother: "Jake",
    sister: "Rose"
}

// 2.
const familyKeys = Object.keys(family)
for(let key of familyKeys) {
    console.log(key);
}

// 3.
for(let value in family) {
    console.log(family[value]);
}


// Exercise 6 : 


const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
newSentance = []

// 5.
for(let value in details) {
    newSentance.push(`${value} ${details[value]}`);
}
console.log(newSentance.join(" "))



// Exercise 7 
// 1.
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// 2. 
const firstLetter = [];
for (let i = 0; i < names.length; i++) {
    firstLetter.push(names[i][0])
}

// 3.
firstLetter.sort();
console.log(firstLetter.join(''));