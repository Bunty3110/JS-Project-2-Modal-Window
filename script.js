'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openbtn = document.querySelectorAll('.show-modal');
const closebtn = document.querySelector('.close-modal');

const opens = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closes = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < openbtn.length; i++)
  openbtn[i].addEventListener('click', opens);

closebtn.addEventListener('click', closes);
overlay.addEventListener('click', closes);
document.addEventListener('keydown', function (e) {
  if (!modal.classList.contains('hidden') && e.key === 'Escape') {
    closes();
  }
});
