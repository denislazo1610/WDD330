'use strict';

const block1 = [
    {
        label: "Week1 notes",
        url: "week1/index.html"
    }
]

const block2 = [
    {

    }
]

var list1 = document.querySelector('ol#first');



for(var number = 0; number < block1.length; number++){
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.innerHTML = block1[number].label;
    a.href = block1[number].url;
    li.appendChild(a);
    list1.appendChild(li);
}