function Smartphone(brand, model, makeYear) {
  this.brand = brand;
  this.model = model;
  this.makeYear = makeYear;
  this.makeCall = function (phoneMuber) {
    return `Calling... ${phoneMuber} from ${this.brand} ${this.model}`;
  };
}

const shahadatPhone = new Smartphone("Samsung", "S10", "2020");
console.log(shahadatPhone);
console.log(shahadatPhone.makeCall("0123456789"));
