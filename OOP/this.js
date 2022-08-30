console.log("this keyword");

const smartphone = {
  brand: "Apple",
  model: "iPhone X",
  makeCall: function () {
    console.log(`now making a call from  ${this.model} of ${this.brand}`);
  },
};

// Note: jokhon object r method r vitore this use hoy tokhon oi object ta k nirdesh kore
smartphone.makeCall(); // now making a call from  iPhone X of Apple

// Note: this jodi eka thake tokhon eta browser r window object[Global object] k nirdesh kore
console.log(this); // Window {...}

// function
function hi() {
  console.log(this);
  console.log(`Hi from ${this}`); // Hi from [object global]
}

hi();

// Note: DOM r kono event or tag e this use korle oi event or tag kei this refer korbe.
