const palindromes = function (string) {
    const cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleanString.split('').reverse().join('');
    if(cleanString === reversed){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
