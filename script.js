'use strict';

let increaseBtn = document.querySelector('.increase-button');
let decreaseBtn = document.querySelector('.decrease-button');
let counter = document.querySelector('.counter-para');
let clearBtn = document.querySelector('.clear-button');
let priceUpdate = document.querySelector('.price-update');
let discountPara = document.querySelector('.discount');
let discountBtn = document.querySelector('.discount-button');
let finalPrice;

Number(discountPara.textContent);
Number((counter.textContent = 0));

priceUpdate.textContent = 0;
let fixedPrice = 1200;
let increaseFunc = function () {
  Number(counter.textContent++);
  priceUpdate.textContent = Number(counter.textContent) * fixedPrice;
};
let decreaseFunc = function () {
  if (counter.textContent > 0) {
    counter.textContent--;
    priceUpdate.textContent = Number(counter.textContent) * fixedPrice;
  }
};

let clearFunc = function () {
  counter.textContent = 0;
  priceUpdate.textContent = 0;
  discountPara.textContent = undefined;
};

// let discFunc = function () {
//   priceUpdate.textContent;
//   finalPrice = (20 / 100) * priceUpdate.textContent;
//   discountPara.textContent = priceUpdate.textContent - finalPrice;

//   if (discountPara.textContent > 0) {
//     increaseBtn.disabled = true;
//   }
// };                    TODO: //  resume discount functionality (6/29/23)

increaseBtn.addEventListener('click', increaseFunc);
decreaseBtn.addEventListener('click', decreaseFunc);
clearBtn.addEventListener('click', clearFunc);
// discountBtn.addEventListener('click', discFunc); TODO: //  resume discount functionality (6/29/23)
