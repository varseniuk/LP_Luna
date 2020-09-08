'use strict';

const benefits = document.querySelector('.benefits');

const benefitsContainer = benefits.querySelector('.benefits__container');
const benefitsRightScrollBtn = benefits.querySelector('.scroll__btn--right');
const benefitsLeftScrollBtn = benefits.querySelector('.scroll__btn--left');
const benefitsScrollLabel = benefits.querySelector('.scroll-label--active');

benefitsLeftScrollBtn.disabled = true;

let benefitsLeftPosition = 0;
let benefitsScrollIndex = 1;

function benefitsScrollRight() {
  benefitsScrollLabel.innerText = `0${benefitsScrollIndex + 1}`;
  benefitsLeftScrollBtn.disabled = false;
  benefitsLeftPosition -= 300;
  benefitsContainer.style.left = `${benefitsLeftPosition}px`;
  benefitsScrollIndex++;

  if (benefitsScrollIndex === 4) {
    benefitsRightScrollBtn.disabled = true;
  }
}

function benefitsScrollLeft() {
  benefitsScrollLabel.innerText = `0${benefitsScrollIndex - 1}`;
  benefitsRightScrollBtn.disabled = false;
  benefitsLeftPosition += 300;
  benefitsContainer.style.left = `${benefitsLeftPosition}px`;
  benefitsScrollIndex--;

  if (benefitsScrollIndex === 1) {
    benefitsLeftScrollBtn.disabled = true;
  }
}

benefitsRightScrollBtn.addEventListener('click', benefitsScrollRight);
benefitsLeftScrollBtn.addEventListener('click', benefitsScrollLeft);
