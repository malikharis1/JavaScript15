// normal function
const hello = function () {
  console.log("hello from normal function");
};
hello();

// arrow function
const hi = () => {
  console.log("hi fromn arrow function");
};
hi();

// oneline function
const hiiii = () => console.log("hiiii fromn arrow function");
hiiii();

//  Return arrow function
const hiReturn = () => "hey i'm return value";
hiReturn();

// for single paramter or argument
const paramter = (userName) => console.log(userName);
paramter("Haris Malik");

// arrow function as a callBack
// normal call back
let arr = ["haris", "faizan", "afnan", "iqra", "umaira"];

const arrLengths = arr.map(function (nameL) {
  return nameL.length;
});
console.log(arrLengths);
// with arrow function
let firstName = ["haris", "faizan", "afnan", "iqra", "umaira"];

const FirstLengths = firstName.map((nameL) => nameL.length);
console.log(FirstLengths);
