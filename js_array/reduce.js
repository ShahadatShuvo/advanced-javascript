// Syntax
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

var numbers = [1, 2, 3, 4, 5];

var result = numbers.reduce((prevValue, currentValue, currentIndex, arr) => {
  return prevValue + currentValue;
}, 0);

console.log(result);
