// 🌟 Exercise 1 


const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// Output will use the key and value of the object to display the following:
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)



// 🌟 Exercise 2

function displayStudentInfo(objUser){
    console.log(`Your full name is ${objUser.first} ${objUser.last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});




// 🌟 Exercise 3

const users = { user1: 18273, user2: 92833, user3: 90315 }

let results1 = Object.entries(users)
for (let index = 0; index < results1.length; index++) {
    results1[index][1] *= 2
    
}
console.log(results1)



// Exercise 4 
// Instructions

//     Analyze the code below. What will be the output?

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

// the output will be object because the class is a constructor function and the new keyword creates an object of the class



// 🌟 Exercise 5 


//I believe option 2 will extend the Dog class


// 🌟 Exercise 6 

// 1.
class Animal {
    constructor(name, type, colour) {
      this.name = name;
      this.type = type;
      this.color = colour;
    }
  };

// 2.
class Mamal extends Animal {
    constructor(name, type, colour){
        super(name, type, colour)
    }

    sound(soundItMakes) {
        console.log(`${soundItMakes} I'm a ${this.type}, named ${this.name} and I'm ${this.colour}`)
    }
}

// 3.
let farmerCow = new Mamal("Dirk", "Human", "burned from the sun")

farmerCow.sound("Auuw")

