// Given an Array of integer, make the double of the values and return a new array which values is greater than 10.

let arr = [2, 9, 7, 8, 3];

console.log(
  arr
    .sort((a, b) => a - b)
    .map((item) => 2 * item)
    .filter((item) => item > 10)
);
