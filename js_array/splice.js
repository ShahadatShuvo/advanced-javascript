// Syntax:
// splice(start);
// splice(start, deleteCount);
// splice(start, deleteCount, item1);
// splice(start, deleteCount, item1, item2, itemN);

// Detail Info->Visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let arr = ["apple", "orange", "banana"];

arr.splice(1, 0, "mango");

console.log(arr); /// [ 'apple', 'mango', 'orange', 'banana' ]

arr.splice(1, 1, "guava");

console.log(arr); // [ 'apple', 'guava', 'orange', 'banana' ]

arr.splice(1, 2, "licchi");

console.log(arr); // [ 'apple', 'licchi', 'banana' ]

arr.splice(1, 3, "aaa");

console.log(arr); // [ 'apple', 'aaa' ]

arr.splice(1, 1, "mango", "orange", "apple");

console.log(arr); // [ 'apple', 'mango', 'orange', 'apple' ]

let falaydewaItem = arr.splice(1, 2, "a1", "b2");

console.log(arr); // [ 'apple', 'a1', 'b2', 'apple' ]

console.log(falaydewaItem); // [ 'mango', 'orange' ]

// Delete  with splice: delete 'b2' from arr(we can delete from any position)

arr.splice(2, 1);

console.log(arr); // [ 'apple', 'a1', 'apple' ]
