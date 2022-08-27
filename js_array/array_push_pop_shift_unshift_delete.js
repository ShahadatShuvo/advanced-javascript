let arr = ["banana", "orange", "apple"]; // + 'maango'
console.log(arr); // [ 'banana', 'orange', 'apple' ]
arr.push("mango");
console.log(arr); // [ 'banana', 'orange', 'apple', 'mango' ]
arr.pop();
console.log(arr); // [ 'banana', 'orange', 'apple' ]
arr.unshift("mango"); // adds element from first index
console.log(arr); // [ 'mango', 'banana', 'orange', 'apple' ]
arr.shift(); // removes element fron first
console.log(arr); // [ 'banana', 'orange', 'apple' ]

delete arr[1];
console.log(arr); // [ 'banana', , 'apple' ]

arr[1] = "guava";
console.log(arr); // [ 'banana', 'guava', 'apple' ]
