const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)){
        return 'ERROR';
    }
    if(start <0 || end < 0){
        return 'ERROR';
    }
    if(typeof start !== 'number' || typeof end !=='number'){
        return 'ERROR';
    }

    let finalsum = 0;
    if (start > end){
        for (let i = start; i >= end; i--){
        finalsum += i;
        }   
    }else{
        for (let i = start; i <= end; i++){
            finalsum += i;
        }
    }
    return finalsum;
};
console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;
