/* ===== Problem #3 ===== */

/* ===== The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned. ===== */

function problem3(carsArray){
    let result = [];
    if(carsArray.length === 0 || Array.isArray(carsArray) === false){
        return result;        
    }else{
        for(let index = 0; index < carsArray.length; index++){
            result.push(carsArray[index].car_model);
        }
        return result.sort();
    }
}

module.exports = problem3;
