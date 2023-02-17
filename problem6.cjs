/* ===== Problem #6 ===== */

/* ===== A buyer is interested in seeing only BMW and Audi cars within the carsArray.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console. ===== */

function problem6(carsArray){
    let result = [];
    if(carsArray.length === 0 || Array.isArray(carsArray) === false){
        return result;        
    }
    for(let index = 0; index < carsArray.length; index++){
        if(carsArray[index].car_make === 'Audi' || carsArray[index].car_make === 'BMW'){
            result.push(carsArray[index]);
        }
    }
    return result;
}

module.exports = problem6;