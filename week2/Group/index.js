"use strict";
// let content = document.querySelector("#input");
function test1() {
  let content = document.querySelector("#input").value;
  document.getElementById("output").innerHTML = content;
}

function test2() {
  let content = parseInt(document.querySelector("#input2").value);

  let sum = (content * (content + 1)) / 2;
  if (content !== NaN) {
    document.getElementById("output2").innerHTML = sum;
  }
}

function test3() {
  let content1 = parseInt(document.querySelector("#input3").value);
  let content2 = parseInt(document.querySelector("#input4").value);

  if ((content1 !== NaN) & (content2 !== NaN)) {
    let add = content1 + content2;
    document.getElementById("output3").innerHTML = add;
  }
}
