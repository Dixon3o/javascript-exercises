const findTheOldest = function(arr) {
    function getAge(person){
        if(person.yearOfDeath !== undefined){
            return person.yearOfDeath - person.yearOfBirth;
        }else{
            let currentYear = new Date().getFullYear();
            return currentYear - person.yearOfBirth;
        }
    }
    return arr.reduce((a,b) => {
        if(getAge(a) > getAge(b)){
            return a;
        }else{
            return b;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
