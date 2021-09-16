'use strict';

const links = [
    {
        label: "Week1 notes",
        url: "week1/index.html"
    }
]

var list = document.querySelector('ol');

var li = document.createElement('li');

li.appendChild(document.createTextNode("Week1 Notes"));

list.appendChild(li);
