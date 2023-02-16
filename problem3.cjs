/* ===== Problem #3 ===== */

/* ===== The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned. ===== */

function problem3(inventory){
    let carModel = [];
    for(let index = 0; index < inventory.length; index++){
        carModel.push(inventory[index].car_model);
    }
    return carModel.sort();
}

module.exports = problem3;
