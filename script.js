'use strict';

const increaseBtn = document.querySelector('.increase-button');
const decreaseBtn = document.querySelector('.decrease-button');
let counter = document.querySelector('.counter-para');

counter.textContent = 0;

let increaseFunc = function () {
  counter.textContent++;
};
let decreaseFunc = function () {
  if (counter.textContent > 0) {
    counter.textContent--;
  }
};

increaseBtn.addEventListener('click', increaseFunc);
decreaseBtn.addEventListener('click', decreaseFunc);
