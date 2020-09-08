'use strict';

const video = document.querySelector('.presentation__video');
const playBtn = document.querySelector('.presentation__play-button');

playBtn.addEventListener('click', () => {
  video.style.display = 'block';
  playBtn.style.display = 'none';
});

video.addEventListener('click', () => {
  playBtn.style.display = 'block';
  video.style.display = 'none';
});
