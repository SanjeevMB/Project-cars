/* ===== Problem #1 ===== */

/* ===== The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of: 
"Car 33 is a *car year goes here* *car make goes here* *car model goes here*" ==== */

function problem1(carsArray = [], searchId){
    let result = [];
    if(carsArray.length === 0 || searchId === undefined || Array.isArray(carsArray) === false){
        return result;        
    }else{
        for(let index = 0; index < carsArray.length; index++){
            if(carsArray[index].id === searchId){
                result.push(carsArray[index]);
                return result;
            }
        }
        return result;        
    }
}

module.exports = problem1;