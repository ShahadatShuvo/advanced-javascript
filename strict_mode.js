const strictMode = (x) => {
  "use strict";
  const a = 12;
  b = a + x * 10;
  console.log(b); // b is not defined[error]
};

strictMode(5);
