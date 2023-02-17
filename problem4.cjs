/* ===== Problem #4 ===== */

/* ===== The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned. ===== */

function problem4(carsArray){
    let result = [];
    if(carsArray.length === 0 || Array.isArray(carsArray) === false){
        return result;        
    }else{
        for(let index = 0; index < carsArray.length; index++){
            result.push(carsArray[index].car_year);
        }
        return result;
    }
}

module.exports = problem4;