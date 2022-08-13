function sum(first, second) {
  let result = first + second;
  console.log(result);
  if (result > 9) {
    const mood = "happy";
    var mood1 = "joy";
    console.log(mood);
    console.log(mood1);
  }
  // console.log(mood); // out of scope
  console.log(mood1); // joy [because of var]
}

sum(5, 6);
