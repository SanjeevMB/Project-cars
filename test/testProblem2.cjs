const carsArray = require('./inventory.cjs');

let problem2 = require('../problem2.cjs');

let carInfo = problem2(carsArray);

console.log(`Last car is a ${carInfo.car_make} ${carInfo.car_model}`)
