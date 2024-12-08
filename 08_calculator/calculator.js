const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
  return x - y;
	
};

const sum = function(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
     sum += x[i];
  }
  return Number(sum);
};

const multiply = function(x) {
  let sum = 1;
  x.forEach(element => {
    sum = sum * element;
  });
  return sum;
};

const power = function(x,y) {
  return Math.pow(x,y);
	
};

const factorial = function(x) {
  if (x === 0) {
    return 1;
  }
  let sum = 1;
  for (let i = x; i > 0; i--) {
    sum = sum * i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
