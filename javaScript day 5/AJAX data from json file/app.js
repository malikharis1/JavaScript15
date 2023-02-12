let btnOne = document.querySelector("#btn1").addEventListener("click", employ);
let btnTwo = document.querySelector("#btn2").addEventListener("click", employs);
let output1 = document.querySelector(".output1");
let output2 = document.querySelector(".output2");

function employ() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "employ.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
    //   console.log(this.responseText);
      let employ = JSON.parse(this.responseText);
      output1.innerHTML = `
        <ul>
        <li>id:${employ.id}</li>
        <li>name: ${employ.name}</li>
        <li>position: ${employ.position}</li>
      </ul>
        `;
    }
  };
  xhr.send();
}

function employs() {
//   console.log("click");
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "employs.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
      //   console.log(this.responseText);
      let employs = JSON.parse(this.responseText);
      let output = "";

      employs.forEach(function (employ) {
        output += `
          <ul>
          <li>id:${employ.id}</li>
          <li>name: ${employ.name}</li>
          <li>position: ${employ.position}</li>
        </ul>
          `;
      });
      output2.innerHTML = output;
    }
  };
  xhr.send();
}
