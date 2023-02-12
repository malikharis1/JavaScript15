let btn = document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  let noOfJokes = document.querySelector(".form-control").value;
  console.log(noOfJokes);
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `https://v2.jokeapi.dev/joke/Any?amount=${noOfJokes}`, true);

  xhr.onload = function () {
    if (this.status == 200) {
      let jokeS = JSON.parse(this.responseText);
      console.log(jokeS.jokes);
      //   jokes.jokes.forEach((joke) => {
      // console.log(haris);
      //   });
      let output = "";
      jokeS.jokes.forEach((e) => {
        let uns = e.setup;
        let und = e.delivery;
        if (uns != undefined && und != undefined) {
          output += `
                        <h5> ${e.setup}</h5>
                        <p> ${e.delivery} </p> 
                      `;
          console.log(e.setup);
          console.log(e.delivery);
        }
      });
      let list = document.querySelector(".list");
      list.innerHTML = output;
      //   console.log(jokes);
    } else {
      alert("jokes not found");
    }
  };
  xhr.send();
  console.log("haris");
});
