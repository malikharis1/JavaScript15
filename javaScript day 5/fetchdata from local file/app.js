console.log("haris");
let btn = document.querySelector("#btn").addEventListener("click", onloading);

function onloading() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "data.txt", true);

  xhr.onload = function () {
    if (this.status === 200) console.log(this.responseText);
  };
  xhr.send();
}
