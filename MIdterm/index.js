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
}

let addButtonTask = document.querySelector(".add");
addButtonTask.addEventListener("click", function () {
  let newTask = document.querySelector(".newTask");
  createTask(newTask.value);
  newTask.value = "";
});

const tasks = document.querySelectorAll(".task");
const squares = document.querySelectorAll(".square");
const deleteButtons = document.querySelectorAll(".delete");

for (let x = 0; x < tasks.length; x++) {
  squares[x].addEventListener("click", function () {
    let content = squares[x].querySelector("h1");
    content.innerHTML = content.innerHTML == "" ? "X" : "";
    let sibling = squares[x].nextElementSibling;
    sibling.classList.toggle("crossed");
  });

  deleteButtons[x].addEventListener("click", function () {
    let parent = deleteButtons[x].parentElement;
    parent.parentNode.removeChild(parent);
  });
}
