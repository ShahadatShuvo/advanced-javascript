const first = 0;
const second = false;

if (first == second) {
  console.log("True"); // True
} else {
  console.log("False");
}

if (first === second) {
  console.log("True");
} else {
  console.log("False"); // False
}

/**
 * In js :
 * == it convert the variable values to the same data type before performing comparison.
 * example : comparison between string and interger data type
 */
5 == "5"; // returns true

// === it does not convert data type of variable before performing comparison.
// example:
5 === "5"; // return false
