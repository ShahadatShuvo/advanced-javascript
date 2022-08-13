// undefined

let value;
console.log(value); //undefined

function add(a, b) {
  console.log(a); // undefined
  console.log(a + b); // NaN
  return;
}
console.log(add()); //undefined

const shahadat = {
  name: "Shahadat Hossain Shuvo",
  phone: "01954677860",
};
console.log(shahadat.address); // undefined

let fun = undefined;
console.log(fun); // undefined

let ages = [1, 2, 6];
console.log(ages[11]); // undefined

const x = null;
console.log(x); // null

const y = undefined;
console.log(y); // undefined

if (x == y) {
  console.log("True"); // True
} else {
  console.log("False");
}

if (x === y) {
  console.log("True");
} else {
  console.log("False"); // False
}

//loosely equal (compare values between two variables)
null == undefined; // true  ( null => 0 , undefined => NAN)

//strictly not equal (compare both type and value)
null === undefined; // false  (typeof null => object , typeof undefined => undefined)
null !== undefined; // true   (typeof null => object , typeof undefined => undefined)
