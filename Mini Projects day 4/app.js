let input = document.getElementById("exampleInputEmail1");
let form = document.getElementById("form");
let btn = document.querySelector(".btn");
let listGroup = document.querySelector(".list-group");
let clearTasks = document.querySelector(".btn-danger");
let filter = document.querySelector("#filter");
// added a cache for task icons
let icons;

// fetch tasks from local storage on page load and display them
window.onload = () => {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    let li = document.createElement("li");
    let i = document.createElement("i");
    li.className = "list-group-item";
    li.innerText = task;
    i.className = "bi bi-x-lg float-end";
    li.appendChild(i);
    listGroup.appendChild(li);
  });

  // update the cache of task icons
  icons = document.querySelectorAll("i");
  handleTaskIcons();
};

// handle submit event of form
form.addEventListener("submit", getVal);

// function to get value and add it to local storage
function getVal(e) {
  e.preventDefault();
  let value = input.value;

  if (value !== "") {
    // get existing tasks from local storage or create a new array
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(value);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // create a list item to display task
    let li = document.createElement("li");
    let i = document.createElement("i");
    li.className = "list-group-item";
    li.innerText = value;
    i.className = "bi bi-x-lg float-end";
    li.appendChild(i);
    listGroup.appendChild(li);
    input.value = "";

    // update the cache of task icons
    icons = document.querySelectorAll("i");
    handleTaskIcons();
  } else {
    alert("Please enter a task");
  }
}

// function to handle task icons
function handleTaskIcons() {
  icons.forEach((icon, index) => {
    icon.addEventListener("click", function () {
      let parent = icon.parentElement;
      parent.remove();
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      icons = document.querySelectorAll("i");
    });
  });
}

// clear all tasks from local storage and UI
clearTasks.addEventListener("click", (e) => {
  localStorage.removeItem("tasks");
  icons.forEach((icon) => {
    let parent = icon.parentElement;
    parent.remove();
  });
});

// filter task
filter.addEventListener("keyup", filterTask);

function filterTask(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".list-group-item").forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });

  console.log(text);
}
