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

const block2 = [
  {
    label: "Week7 notes",
    url: "week7/index.html",
  },
  {
    label: "Week8 notes",
    url: "week8/index.html",
  },
  {
    label: "Week9 notes",
    url: "week9/index.html",
  },
  {
    label: "Week10 notes",
    url: "week10/index.html",
  },
  {
    label: "Week11 notes",
    url: "week11/index.html",
  },
  {
    label: "Final Project",
    url: "https://denislazo1610.github.io/Tia-Mila-Tienda/",
  },
];

var list1 = document.querySelector("ol#first");

for (var number = 0; number < block1.length; number++) {
  var li = document.createElement("li");
  var a = document.createElement("a");
  a.innerHTML = block1[number].label;
  a.href = block1[number].url;
  li.appendChild(a);
  list1.appendChild(li);
}

var list2 = document.querySelector("ol#second");

for (var number = 0; number < block2.length; number++) {
  var li = document.createElement("li");
  var a = document.createElement("a");
  a.innerHTML = block2[number].label;
  a.href = block2[number].url;
  li.appendChild(a);
  list2.appendChild(li);
}
