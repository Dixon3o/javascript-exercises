const fibonacci = function(num) {
    num = parseInt(num);
    let first = 0;
    let second = 1;
    let current;
    if(num === 0){
        return current = 0;
    }else if(num < 0){
        let msg = 'OOPS';
        return msg;
    }else if(num === 1){
        return current = 1;
    }
    for(let i = 2; i <= num; i++){
        current = first + second;
        first = second;
        second = current;
        
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
