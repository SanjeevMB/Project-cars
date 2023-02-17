const inventory = require('./inventory.cjs');

let problem5 = require('../problem5.cjs');

let carInfo = problem5(inventory);

console.log(carInfo.length);