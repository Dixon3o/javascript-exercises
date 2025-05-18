const removeFromArray = (array, ...numsToRemove) => {
    return array.filter(element => !numsToRemove.includes(element));
};
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
