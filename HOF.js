// In JavaScript, functions are treated as first-class objects. That means they can be stored as any other values in objects or arrays, passed around as arguments, or returned from other functions.

// Higher-order functions are a functional programming pattern when functions are being passed as arguments to other functions or returned as a result.

function log(item) {
  return console.log(item); // 1, 2, 3
}

function process(data, callback) {
  for (let i = 0; i < data.length; i++) {
    callback(data[i]);
  }
}

process([1, 2, 3], log);

// Array HoF

const numbers = [1, 2, 3];

// pass unonymouse function
numbers.map(function (item) {
  return item * 2;
}); // [2, 4, 6]

// or extract the callback into a named function
function double(item) {
  return item * 2;
}

numbers.map(double); // [2, 4, 6]

// Why It Is Useful?
// The best part of higher-order functions is composability. It gives you the ability to combine functions and operate them in a sequence. For example, you could compose HoF in a pipeline with array methods:

const numbers2 = [1, 2, 3];

console.log(
  numbers
    .map((n) => n * 2) // it will return [2, 4, 6]
    .filter((n) => n % 4) // it will filter out number that divides by 4
    .reduce((a, b) => a + b) // return 6 - sum of the array items
);
