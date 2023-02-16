const carsArray = require('./inventory.cjs');

let problem5 = require('../problem5.cjs');

let carInfo = problem5(carsArray);

console.log(carInfo.length);