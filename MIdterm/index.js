const squares = document.querySelectorAll(".square");

for (let x = 0; x < squares.length; x++) {
  squares[x].addEventListener("click", function () {
    let content = squares[x].querySelector("h1");
    content.innerHTML = content.innerHTML == "" ? "X" : "";
    let sibling = squares[x].nextElementSibling;
    sibling.classList.toggle("crossed");
  });
}
