class MobilePhone {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  getModel() {
    return this.model;
  }
  getbrand() {
    return this.brand;
  }
  sendtext() {
    return `using ${this.model} of ${this.brand} to send text`;
  }
}

let newMobilePhone = new MobilePhone("Apple", "iPhone X");
console.log(newMobilePhone.getModel()); // iPhone X
console.log(newMobilePhone.getbrand()); // Apple
console.log(newMobilePhone.sendtext()); // using iPhone X of Apple to send text
console.log(newMobilePhone); // MobilePhone { brand: 'Apple', model: 'iPhone X' }
