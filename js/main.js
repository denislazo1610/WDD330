'use strict';

const links = [
    {
        label: "Week1 notes",
        url: "week1/index.html"
    }
]

var list = document.querySelector('ol');


for(var number = 0; number < links.length; number++){
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.innerHTML = links[number].label;
    a.href = links[number].url;
    li.appendChild(a);
    list.appendChild(li);
}