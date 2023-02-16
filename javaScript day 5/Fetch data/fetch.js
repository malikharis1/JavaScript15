let output = document.querySelector(".output");
let btn1 = document.querySelector("#btn1").addEventListener("click", () => {
  console.log("local file");

  fetch("data.txt")
    .then((res) => res.text())
    .then((data) => (output.innerHTML = data))
    .catch((err) => console.log(err));
});

let btn2 = document.querySelector("#btn2").addEventListener("click", () => {
  console.log("JSON");
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      let outputJSON = "";
      data.forEach((d) => {
        outputJSON += ` <h4> ${d.title}</h4>
          <h5>${d.body}</h5>  `;
      });
      output.innerHTML = outputJSON;
    })
    .catch((err) => console.log(err));
});

console.log("haris");
let btn3 = document.querySelector("#btn3").addEventListener("click", () => {
  console.log("get from API");
  fetch("https://v2.jokeapi.dev/joke/Any?amount=10")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      let outputAPI = "";
      data.jokes.forEach((joke) => {
        let uns = joke.setup;
        let und = joke.delivery;
        if (uns != undefined && und != undefined) {
          outputAPI += `
                        <h5> ${joke.setup}</h5>
                        <p> ${joke.delivery} </p> 
                      `;
        }
      });
      output.innerHTML = outputAPI;
    })
    .catch((err) => console.log("error from catch " + err));
});
