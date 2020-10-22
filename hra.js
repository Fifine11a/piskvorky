'use strict';

console.log('You better work, b*tch!');

let whoPlays = 'circle';

const player = document.querySelector('.player');

const gamePlayed = (event) => {
  if (whoPlays === 'circle') {
    event.target.classList.add('selectedCircle');
    player.classList.toggle('.playerCross');
    whoPlays = 'cross';
  } else {
    event.target.classList.add('selectedCross');
    player.classList.toggle('.playerCross');
    whoPlays = 'circle';
  }
};

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', gamePlayed);
}
