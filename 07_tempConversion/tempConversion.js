const convertToCelsius = function(x) {
  let temp = (x - 32) * 5/9;
  return parseFloat(temp.toFixed(1));
};

const convertToFahrenheit = function(x) {
  let temp = (x * 9/5) + 32;
  return parseFloat(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
