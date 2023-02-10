let btn = document.querySelector(".btn");
// console.log(radius)
let form = document.querySelector(".form");
let pi = 3.14159265358979323846;
let tdbody = document.querySelector("tbody");
let loader = document.querySelector(".container .loader");
let table = document.querySelector("table");
console.log(loader);
// Function to calculate the area of circle
function findArea(r) {
  return pi * r * r;
}
// Function to calculate the area of rectangle
function findAot(l, a) {
  return l * a;
}
function circumference(r) {
  return 2 * pi * r;
}
// displaying the area
function areaOfTrinagle(h, b) {
  return (h * b) / 2;
}
table.style.display = "none";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let radius = document.querySelector("#radius").value;
  let length = document.querySelector("#length").value;
  let width = document.querySelector("#width").value;
  let circumferenceaRadius = document.querySelector(
    "#circumferenceradius"
  ).value;
  let height = document.querySelector("#height").value;
  let base = document.querySelector("#base").value;

  if (table.style.display == "block") {
    table.style.display = "none";
  }
  if (
    (radius.length <= 0) &
    (length.length <= 0) &
    (width.length <= 0) &
    (circumference.length <= 0)
  ) {
    let alert = document.querySelector(".alert");
    alert.style.display = "block";
    setTimeout(() => {
      {
        alert.style.display = "none";
      }
    }, 2300);
  } else {
    setTimeout(() => {
      table.style.display = "block";
      let calculatArea = findArea(radius);
      let calculateAreaOfTriangle = findAot(length, width);
      let calculateCircumference = circumference(circumferenceaRadius);
      let calculateAreaOfTrinagle = areaOfTrinagle(height, base);

      console.log(
        calculatArea,
        calculateAreaOfTriangle,
        calculateAreaOfTrinagle,
        calculateCircumference
      );
      let arr = [
        calculatArea,
        calculateAreaOfTriangle,
        calculateCircumference,
        calculateAreaOfTrinagle,
      ];
      let tr = document.createElement("tr");

      let i = 0;
      while (i < 4) {
        let td = document.createElement("td");
        td.textContent = `${arr[i].toFixed(2)}`;
        tr.appendChild(td);
        i++;
        console.log(tr);
      }
      tdbody.appendChild(tr);

      loader.style.display = "none";
    }, 1300);
    loader.style.display = "block";
  }
});
