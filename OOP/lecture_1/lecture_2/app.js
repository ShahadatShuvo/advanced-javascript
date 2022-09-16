class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getname = function () {
    return this.name;
  };
  getAge = function () {
    return this.age;
  };
}

class House {
  constructor(address, price, residences) {
    this.address = address;
    this.price = price;
    this.residences = residences;
  }

  getAddress = function () {
    return this.address;
  };

  getPrice = function () {
    return this.price;
  };
  getResidences = function () {
    return this.residences;
  };
  addResident = function (resident) {
    this.residences.push(resident);
  };
}

// const shahadat = new Person("shahadat", 25);
// const shuvo = new Person("shuvo", 25);
// console.log(shahadat);
// console.log(shahadat.getname());
// console.log(shahadat.getAge());
// console.log(shuvo);

let shahadat = new Person("shahadat", 22);
let shuvo = new Person("shuvo", 25);
let house = new House("dhaka", 125500, [shahadat, shuvo]);
let hossain = new Person("hossain", 15);
console.log(house.getResidences());
house.addResident(hossain);
console.log(house.getResidences());
