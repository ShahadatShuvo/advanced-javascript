function Calculator() {
  this.result = 0;
  this.add = function (newnumber) {
    this.result = this.result + newnumber;
    return this;
  };
  this.substruct = function (newnumber) {
    this.result = this.result - newnumber;
    return this;
  };
  this.getResult = function () {
    return this.result;
  };
}

let newCalculator = new Calculator();

console.log(
  newCalculator.add(10).add(20).add(50).substruct(25).add(10).getResult()
); // 65
