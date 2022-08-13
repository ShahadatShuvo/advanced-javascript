//primitive = {STRING, NUMBER, BOOLEAN, SYMBBOL, UNDEFIEND, NULL}
//non-primitive = {ARRAY, OBJECT, FUNCTION}

//primitive is always copied by VALUE
var a = 1;
var b = a;
console.log(a, b); // 1, 1
a = 3;
console.log(a); //3
console.log(b); // still 1 and not 3   (always copied by value only)

//non-primitive is always copied by REFERENCE
var x = { name: "Jscript" };
var y = x;
//console.log(x , y)     TWICE =  Object { name: "Jscript" }
x.name = "Js";
console.log(x); //Js
console.log(y); //Js  {copied by reference} like pointers in C lang

console.log(1 === 1); // true
console.log([] === []); // false
console.log({} === {}); //false
