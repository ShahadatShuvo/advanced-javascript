const numbers = [1, 5, 3, 4, 7, 6];

const squareArr = [];

for (let i = 0; i < numbers.length; i++) {
  squareArr.push(numbers[i] * numbers[i]);
}
console.log(squareArr); // [ 1, 25, 9, 16, 49, 36 ]

function square(element) {
  return element * element;
}
const squareArr2 = numbers.map((value) => square(value));
console.log(squareArr2); // [ 1, 25, 9, 16, 49, 36 ]

const squareArr3 = numbers.map(function (element) {
  return element * element;
});
console.log(squareArr3); // [ 1, 25, 9, 16, 49, 36 ]

const squareArr4 = numbers.map((value) => value * value);
console.log(squareArr4); // [ 1, 25, 9, 16, 49, 36 ]

const bigger = numbers.filter((x) => x > 5);
console.log(bigger); // [7, 6]

const smaller = numbers.filter((x) => x < 5);
console.log(smaller); // [ 1, 3, 4 ]

const isThere = numbers.find((x) => x === 4);
console.log(isThere); // 4
