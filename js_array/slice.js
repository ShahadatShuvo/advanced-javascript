// Syntax
// slice();
// slice(start);
// slice(start, end);

let arr = ["apple", "orange", "banana", "mango"];

let result = arr.slice(2);

console.log(arr); // [ 'apple', 'orange', 'banana', 'mango' ]

// slice returns a new array

console.log(result); // [ 'banana', 'mango' ]

let newSlice = arr.slice(1, 3);

console.log(newSlice); // [ 'orange', 'banana' ]
