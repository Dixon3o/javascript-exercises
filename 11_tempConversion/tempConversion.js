const convertToCelsius = function(F) {
  let C;
  C = (F - 32)*5/9
  C = Math.round(C * 10)/10;
  return C;
};

const convertToFahrenheit = function(C) {
  let F;
  F = C * (9/5) + 32;
  F = Math.round(F * 10)/10;
  return F;
};
console.log(convertToCelsius(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
