const palindromes = function (x) {
  let y = x.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return y === y.split('').reverse().join('');

};

// Do not edit below this line
module.exports = palindromes;
