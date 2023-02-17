const inventory = require('./inventory.cjs');

let problem6 = require('../problem6.cjs');

let carInfo = problem6(inventory);

console.log(JSON.stringify(carInfo));