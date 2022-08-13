// Falsy Values List: 0, false, "", null, NaN, undefined

// truthy values list: '0', ' ', [], {}

// to check assign any value into a and see the output..
let a;
console.log(a); //undefined
if (a) {
  console.log("a is truthy");
} else {
  console.log("a is falsy"); // a is falsy
}
