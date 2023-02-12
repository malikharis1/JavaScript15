console.log("welcome to call backs");
function displaySum(sum) {
  console.log(sum);
}

function calculator(num1, num2, cb) {
  let sum = num1 + num2;
  cb(sum);
}

calculator(5, 5, displaySum);
