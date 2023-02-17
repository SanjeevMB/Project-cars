/* ===== Problem #2 ===== */

/* ===== The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of: 
"Last car is a *car make goes here* *car model goes here*" ===== */

function problem2(carsArray){
    let result = [];
    let last = carsArray.length - 1;
    if(carsArray.length === 0 || Array.isArray(carsArray) === false){
        return result;        
    }else{
        result.push(carsArray[last]);
        return result;
    }
}

module.exports = problem2;