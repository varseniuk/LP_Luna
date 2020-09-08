'use strict';

const technology = document.querySelector('.technology');

const techContainer = technology.querySelector('.technology__image-container');
const techRightScrollBtn = technology.querySelector('.scroll__btn--right');
const techLeftScrollBtn = technology.querySelector('.scroll__btn--left');
const techScrollLbl = technology.querySelector('.scroll-label--active');

techLeftScrollBtn.disabled = true;

window.onresize = function() {
  if (techRightScrollBtn.disabled) {
    technologyScrollLeft();
  }
};

function technologyScrollRight() {
  const currentWindowWidth = window.innerWidth;

  if (currentWindowWidth < 400) {
    techContainer.style.left = `-90%`;
  } else if (currentWindowWidth > 768) {
    techContainer.style.left = `-50%`;
  } else {
    techContainer.style.left = `-30%`;
  }

  techScrollLbl.innerText = `02`;
  techLeftScrollBtn.disabled = false;
  techRightScrollBtn.disabled = true;
}

function technologyScrollLeft() {
  techScrollLbl.innerText = `01`;
  techRightScrollBtn.disabled = false;
  techLeftScrollBtn.disabled = true;
  techContainer.style.left = `0`;
}

techRightScrollBtn.addEventListener('click', technologyScrollRight);
techLeftScrollBtn.addEventListener('click', technologyScrollLeft);
