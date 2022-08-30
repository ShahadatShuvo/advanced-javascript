// Ekta class onno ekta class r property use korte chaile extending kora lagbe..

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

class Smartphone extends MobilePhone {
  constructor(brand, model, videoCallFeature) {
    // Note: Amra je class k extend kore rekta class banacchi oitar constructor e jodi kono kichu pass korte hoy tokhon super method r moddhe oi class r vetor data gula pass kore dite pari. example: brand, model Parent class(MobilePhone) r property. egula k directly child class(MobilePhone) theke access kora jabena super method chara.
    super(brand, model);
    this.videoCallFeature = videoCallFeature;
  }
}

let newMobilePhone = new Smartphone("Apple", "iPhone X", "yes");

console.log(newMobilePhone.getModel()); // iPhone X
console.log(newMobilePhone.getbrand()); // iPhone X
