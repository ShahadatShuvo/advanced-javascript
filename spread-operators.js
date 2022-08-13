// Array
let arr1 = [1, 2, 3];
let arr2 = [0, ...arr1];

console.log(arr2); // [0,1,2,3]

const sum = (x, y, z) => {
  //x,y,z = 1,2,3
  return x + y + z;
};

const Numbers = [1, 2, 3, 4, 5];

console.log(sum(...Numbers)); //6

let Store = [1, 2];
let newNumber = 12;

Store = [...Store, newNumber];

console.log(Store); //[1,2,12]
console.log(sum(...Store)); //15

// Object

const person = {
  name: "john",
  address: {
    country: "USA",
    city: "New York",
  },
  phone: "+0189",
};

const updated = {
  ...person,
  phone: "+123",
};

console.log(person); //{ name: 'john',address: { country: 'USA', city: 'New York' },phone: '+0189' }

console.log(updated); // { name: 'john',address: { country: 'USA', city: 'New York' },phone: '+123' }

const updated2 = {
  ...person,
  address: {
    ...person.address,
    city: "San Francisco",
  },
};

console.log(updated2); // { name: 'john',address: { country: 'USA', city: 'San Francisco' },phone: '+0189' }

// Adding

const numbers2 = [1, 2, 3, 4, 5];

const index = numbers2.indexOf(3);

console.log(index); // 2

const added = [...numbers2.slice(0, index), 10, ...numbers2.slice(index)];

console.log(added); // [ 1, 2, 10, 3, 4, 5 ]

// Removing

const removed = numbers2.filter((value) => value !== 3);

console.log(removed); // [ 1, 2, 4, 5 ]

// Updating

const updatedArray = numbers2.map((value) => (value === 3 ? 20 : value));

console.log(updatedArray); // [ 1, 2, 20, 4, 5 ]

let book = {
  title: "the litttle prince",
};

function publish(book) {
  book.isPublished = true;
}

publish(book);

console.log(book); // { title: 'the litttle prince', isPublished: true }
