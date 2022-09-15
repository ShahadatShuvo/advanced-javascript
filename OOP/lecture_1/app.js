// factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);
console.log(circle);

// constructor function

function Circle(radius) {
  console.log(this); // Circle {}
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1); // new operator creates an Empty object {}. then it set this keyword to point that object. By default this points to global object(window)
console.log(another);

// so, we have 2 ways to create an Object. 1. Factory Function  2. Constructor function
