const carsArray = require('./inventory.cjs');

let problem6 = require('../problem6.cjs');

let carInfo = problem6(carsArray);

console.log(JSON.stringify(carInfo));