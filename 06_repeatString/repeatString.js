const repeatString = function(string, num) {
    let newString = '';
    if (num < 0){
        newString = 'ERROR'
        console.log(newString);
    }else if(num >= 0){
        for (let i = 0; i < num; i++){
            newString += string;
        }
    }
    
    return newString;
};
console.log(repeatString('hey', 3));


// Do not edit below this line
module.exports = repeatString;
