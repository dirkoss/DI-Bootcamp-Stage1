// 🌟 Exercise 1 : Colors

// 1. 


const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
for (let i = 0; i < colors.length; i++) {
console.log(`${i +1}# choice is ${colors[i]}`);
}

// 2.

if (colors.includes("Violet")) {
    console.log("yeah")
} else {
    console.log("no")
}

// 🌟 Exercise 2 : Colors #2

// 2

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
let index = 1

colors.forEach(element => {
    index <= 3 ? console.log(`${index}${ordinal[index]} choice is ${colors[index - 1]}`) 
    : console.log(`${index}${ordinal[0]} choice is ${colors[index - 1]}`)
    ++index 
});


// 🌟 Exercise 3 : Analyzing


------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// result will be ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

------2------
const country = "USA";
console.log([...country]);

// output will be ['U', 'S', 'A']

------Bonus------
let newArray = [...[,,]];
console.log(newArray);

// output should be [undefined, undefined]

// 🌟 Exercise 4 : Employees


const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// 1.

const welcomeStudents = users.map(function(users) { return `HELLO ${users.firstName}`});

// 2.

const fullstackers = users.filter(function(users) { return users.role === 'Full Stack Resident'});

// 3.

const fullStackersLastName = users.filter(function(users) { return users.role === 'Full Stack Resident'}).map(function(users) { return users.lastName});

// 🌟 Exercise 5 : Star Wars

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

function reducer(accumulator, currentValue) {
    return accumulator + " " + currentValue;
}

console.log(epic.reduce(reducer));

// 🌟 Exercise 6 : Employees #2

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}];

let passedStudents = students.filter(function(students) { return students.isPassed === true}).map(function(students) { return students.name});