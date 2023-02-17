const inventory = require('./inventory.cjs');

let problem2 = require('../problem2.cjs');

let carInfo = problem2(inventory);

console.log(carInfo);

// console.log(`Last car is a ${carInfo.car_make} ${carInfo.car_model}`);
