const carsArray = require('./inventory.cjs');

let problem1 = require('../problem1.cjs');

let carInfo = problem1(carsArray);

console.log(`Car 33 is a ${carInfo.car_year} ${carInfo.car_make} ${carInfo.car_model}`);
