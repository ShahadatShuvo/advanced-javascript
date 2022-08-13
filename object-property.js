const students = [
  {
    id: 21,
    name: "Sakib",
  },
  {
    id: 26,
    name: "Mushfiq",
  },
  {
    id: 29,
    name: "Nasir",
  },
];

// const names = [];

// for (let i = 0; i < students.length; i++) {
//   names.push(students[i].name);
// }
// console.log(names); // [ 'Sakib', 'Mushfiq', 'Nasir' ]

const names = students.map((s) => s.name);
const ids = students.map((s) => s.id);
console.log(names); // [ 'Sakib', 'Mushfiq', 'Nasir' ]
console.log(ids); // [ 21, 26, 29 ]

const bigger = students.filter((s) => s.id > 25);
console.log(bigger); // [ { id: 26, name: 'Mushfiq' }, { id: 29, name: 'Nasir' } ]

const biggerOne = students.find((s) => s.id > 25);
console.log(biggerOne);
