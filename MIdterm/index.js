let tasks = document.querySelectorAll(".task");
const squares = document.querySelectorAll(".square");
const deleteButtons = document.querySelectorAll(".delete");

let numberTaskLeft = document.querySelector("#items_left");
numberTaskLeft.innerHTML = 0;

console.log(localStorage);

// localStorage.removeItem(0);
// localStorage.removeItem(1);

for (let i = 0; i < localStorage.length; i++) {
  if (typeof i == typeof NaN) {
    createTask(localStorage[i]);
  }
}

function addLocalStorage(palabra) {
  let length = localStorage.length;
  console.log(length);
  length == 0
    ? localStorage.setItem(0, palabra)
    : localStorage.setItem(length++, palabra);
}

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

  tasks = document.querySelectorAll(".task");
  numberTaskLeft.innerHTML = tasks.length;

  square.addEventListener("click", function () {
    let content = square.querySelector("h1");
    content.innerHTML = content.innerHTML == "" ? "X" : "";
    let sibling = square.nextElementSibling;
    sibling.classList.toggle("crossed");

    sibling.classList.contains("crossed")
      ? numberTaskLeft.innerHTML--
      : numberTaskLeft.innerHTML++;
  });

  closeButton.addEventListener("click", function () {
    let sibling = closeButton.previousSibling;

    for (let i = 0; i < localStorage.length; i++) {
      if ((typeof i == typeof NaN) & (localStorage.getItem(i) == palabra)) {
        localStorage.removeItem(i);
        console.log(localStorage);
      }
    }

    let parent = closeButton.parentElement;
    parent.parentNode.removeChild(parent);
    numberTaskLeft.innerHTML--;
  });
}

let addButtonTask = document.querySelector(".add");
addButtonTask.addEventListener("click", function () {
  let newTask = document.querySelector(".newTask");
  addLocalStorage(newTask.value);
  createTask(newTask.value);
  newTask.value = "";
});

let showAllButton = document.querySelector(".showAll");
showAllButton.addEventListener("click", function () {
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].classList.contains("hidden")
      ? tasks[i].classList.remove("hidden")
      : 0;
  }
});

let showNotCompletedButton = document.querySelector(".showNotCompleted");
showNotCompletedButton.addEventListener("click", function () {
  for (let i = 0; i < tasks.length; i++) {
    let child = tasks[i].querySelector("h3");
    tasks[i].classList.contains("hidden")
      ? tasks[i].classList.remove("hidden")
      : 0;
    child.classList.contains("crossed") ? tasks[i].classList.add("hidden") : 0;
  }
});

let showCompletedButton = document.querySelector(".showCompleted");
showCompletedButton.addEventListener("click", function () {
  for (let i = 0; i < tasks.length; i++) {
    let child = tasks[i].querySelector("h3");
    tasks[i].classList.contains("hidden")
      ? tasks[i].classList.remove("hidden")
      : 0;

    child.classList.contains("crossed") ? 0 : tasks[i].classList.add("hidden");
  }
});
