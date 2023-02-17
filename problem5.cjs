/* ===== Problem #5 ===== */

/* ===== The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length. ===== */

function problem5(carsArray){
    let result = [];
    if(carsArray.length === 0 || Array.isArray(carsArray) === false){
        return result;        
    }else{
        for(let index = 0; index < carsArray.length; index++){
            if(carsArray[index].car_year < 2000){
                result.push(carsArray[index].car_year)
            }
        }
    }    
    return result;
}

module.exports = problem5;