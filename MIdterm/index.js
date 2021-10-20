let tasks = document.querySelectorAll(".task");
const squares = document.querySelectorAll(".square");
const deleteButtons = document.querySelectorAll(".delete");

function createTask(palabra) {
  let list = document.querySelector("#list");

  let task = document.createElement("div");
  task.classList.add("task");

  let square = document.createElement("div");
  square.classList.add("square");

  let forX = document.createElement("h1");
  square.appendChild(forX);

  let word = document.createElement("h3");
  word.innerHTML = palabra;
  let closeButton = document.createElement("h2");
  closeButton.innerHTML = "X";

  closeButton.classList.add("delete");

  task.appendChild(square);
  task.appendChild(word);
  task.appendChild(closeButton);

  list.appendChild(task);

  square.addEventListener("click", function () {
    let content = square.querySelector("h1");
    content.innerHTML = content.innerHTML == "" ? "X" : "";
    let sibling = square.nextElementSibling;
    sibling.classList.toggle("crossed");
  });

  closeButton.addEventListener("click", function () {
    let parent = closeButton.parentElement;
    parent.parentNode.removeChild(parent);
  });

  console.log(tasks.length);
}

let addButtonTask = document.querySelector(".add");
addButtonTask.addEventListener("click", function () {
  let newTask = document.querySelector(".newTask");
  createTask(newTask.value);
  newTask.value = "";
});
