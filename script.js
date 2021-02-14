"use strict";

let array = [];

init();

function init() {
  for (let i = 0; i < 40; i++) {
    let parent = document.querySelector("#barContainer");
    let child = document.createElement("div");
    parent.append(child);
    child.classList.add("bar");
    array.unshift(0);
  }
  console.log(array);
  loop();
}

function loop() {
  pickRandomNumber();
  setTimeout(loop, 600);
}

function pickRandomNumber() {
  array.shift();
  let randomNum = Math.floor(Math.random() * 32);
  array.push(randomNum);
  displayData();
}

function displayData() {
  for (let i = 0; i < 40; i++) {
    const bars = document.querySelectorAll("#barContainer .bar");
    const bar = bars[i];
    console.log(array);
    bar.style.height = `${2 * array[i]}px`;
  }
}
