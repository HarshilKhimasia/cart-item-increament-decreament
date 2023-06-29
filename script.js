'use strict';

const increaseBtn = document.querySelector('.increase-button');
const decreaseBtn = document.querySelector('.decrease-button');
let counter = document.querySelector('.counter-para');
let clearBtn = document.querySelector('.clear-button');
counter.textContent = 0;

let increaseFunc = function () {
  counter.textContent++;
};
let decreaseFunc = function () {
  if (counter.textContent > 0) {
    counter.textContent--;
  }
};

let clearFunc = function () {
  counter.textContent = 0;
};

increaseBtn.addEventListener('click', increaseFunc);
decreaseBtn.addEventListener('click', decreaseFunc);
clearBtn.addEventListener('click', clearFunc);
