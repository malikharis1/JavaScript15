console.log("Promises in JS");
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("success");
  } else {
    reject("failed");
  }
});
p.then((msg) => {
  console.log(msg);
}).catch((msg) => {
  console.log(msg);
});

// another example

const time = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("time is good");
  }, 2000);
});
const date = new Promise((resolve, reject) => {
  resolve("date is good");
});
const month = new Promise((resolve, reject) => {
  resolve("month is good");
});

Promise.all([time, date, month]).then((msg) => {
  console.log(msg);
});
