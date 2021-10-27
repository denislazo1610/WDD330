import Hikes from "./hikes.js";

const myHike = new Hikes("hikes");

// console.log(myHike.parentElement);
// console.log(myHike.backButton);
myHike.showHikeList();

// myHike.showOneHike("Bechler Falls");

myHike.addHikeListener();
// myHike.parentElement.length;
