"use strict";

const player1 = "x";
const player2 = "o";

let turn = 1;
const turno = document.querySelector(".turn");
turno.innerHTML = turn;

const allSquares = document.querySelectorAll("td");
const buttonReset = document.querySelector(".reset");

function reset() {
  for (let x = 0; x < 9; x++) {
    allSquares[x].textContent = "";
    turn = 1;
    turno.innerHTML = turn;
  }
}

buttonReset.addEventListener("click", reset);

for (let x = 0; x < 9; x++) {
  allSquares[x].addEventListener("click", () => {
    allSquares[x].textContent = turn == 1 ? player1 : player2;
    turn = turn == 1 ? 2 : 1;
    turno.innerHTML = turn;
  });
}
