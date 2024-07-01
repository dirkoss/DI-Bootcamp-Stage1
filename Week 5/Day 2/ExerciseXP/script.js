//  Exercise 1 

// Part 1
const people = ["Greg", "Mary", "Devon", "James"];



// 1.
people.shift();

// 2.
people[4] = "Jason"

 
// 3.
people[people.length] = "Dirk"

// 4.
console.log(people.indexOf("Mary"))

// 5.
let copy = people.slice(1, 4)

// 6.
console.log(people.indexOf("foo")) //foo not present in array so it returns -1

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
const colors = ["Blue", "Red", "White", "Green", "Orange"]

// 2.
for(let i = 0; i < colors.length; i++) {
console.log(`My #${i + 1} choice is ${colors[i]}`)
}



// Exercise 3

// 1.
let Number = 0
do {
    let Number1 = prompt("Enter an number", 0);
    Number = Number(Number 1);
  }
  while (Number < 10);



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
console.log(building.numberOfRoomsAndRent.David[1] + building.numberOfRoomsAndRent.Sarah[1] > building.numberOfRoomsAndRent.dan[1]);



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