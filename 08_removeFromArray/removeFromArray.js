const removeFromArray = function(array, ...numsToRemove) {
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if (!numsToRemove.includes(array[i])){
            newArray.push(array[i]);
        }
    }
    return newArray;
};
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
