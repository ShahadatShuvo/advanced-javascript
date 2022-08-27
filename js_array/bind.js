const john = {
  name: "john",
  age: 24,
};

const mike = {
  name: "mike",
  age: 32,
};

function greeting() {
  return `Hi I am ${this.name} and I am ${this.age} years old`;
}

const johnGreeting = greeting.bind(john);
console.log(johnGreeting()); //Hi I am john and I am 24 years old

const mikeGreeting = greeting.bind(mike);
console.log(mikeGreeting()); // Hi I am mike and I am 32 years old

// "Variables has local and global scopes. Let's suppose that we have two variables
// with the same name. One is globally defined and the other is defined inside a
// function closure and we want to get the variable value which is inside the
// function closure. In that case we use this bind() method.

// code:

var x = 9; // this refers to global "window" object here in the browser

var person = {
  x: 81, // local variable x = 81
  getX: function () {
    return this.x; // "this" = person , so this.x is the same as  person.x
  },
};
//  the next line of code is the most important one (line 17)
var y = person.getX; // It will return 9, because it will call global value of x(var x=9).

var myFunc = y.bind(person); // It will return 81, because it will call local value of x, which is defined in the object called person(x=81).

y(); // return 9 (the global variable);

myFunc(); // return 81 (the loacl variable);
