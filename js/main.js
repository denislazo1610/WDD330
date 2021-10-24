"use strict";

const block1 = [
  {
    label: "Week1 notes",
    url: "week1/index.html",
  },
  {
    label: "Week2 notes",
    url: "week2/index.html",
  },
  {
    label: "Week3 notes",
    url: "week3/index.html",
  },
  {
    label: "Week4 notes",
    url: "week4/index.html",
  },
  {
    label: "Week5 notes",
    url: "week5/index.html",
  },
  {
    label: "Midterm",
    url: "MIdterm/index.html",
  },
];

const block2 = [{}];

var list1 = document.querySelector("ol#first");

for (var number = 0; number < block1.length; number++) {
  var li = document.createElement("li");
  var a = document.createElement("a");
  a.innerHTML = block1[number].label;
  a.href = block1[number].url;
  li.appendChild(a);
  list1.appendChild(li);
}
