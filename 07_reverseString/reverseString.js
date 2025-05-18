const reverseString = function(string){
    let newString = '';
    for (let i = string.length -1; i >= 0; i--){
        let char = string.charAt(i);
        newString += char;
    }
    return newString;
};
console.log(reverseString(''));

// Do not edit below this line
module.exports = reverseString;
