
// 1.
function getCarHonda(carInventory) {
    let hondaCars = carInventory.filter(car => car.car_make === "Honda");
    return console.log('This is a ' + hondaCars[0].car_make + ' ' + hondaCars[0].car_model + ' from ' + hondaCars[0].car_year + '.');
}

const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];


//   2.

const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

function sortCarInventory(carInventory) {
    let sortedInventory = carInventory.sort((a, b) => a.car_year - b.car_year);
    return console.log(sortedInventory);
}

