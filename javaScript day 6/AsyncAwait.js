console.log("Async await");
// adding async before function makes it to return a promise

function myFun() {
  return "hello";
}
console.log(myFun());

async function hello() {
  return "hello haris";
}
console.log(hello());

hello()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// await

async function newFunc() {
  const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("haris hello");
    },2000);
  });
  let haha = await pro;
  return haha;
}

newFunc().then(res =>{
    console.log(res);
})
