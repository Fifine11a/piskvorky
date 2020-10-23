'use strict';

console.log('You better work, b*tch!');

let whoPlays = 'circle';

const player = document.querySelector('.player');

const gamePlayed = (event) => {
  if (whoPlays === 'circle') {
    event.target.classList.add('selectedCircle');
    player.className = 'player playerCross';
    whoPlays = 'cross';
  } else {
    event.target.classList.add('selectedCross');
    player.className = 'player playerCircle';
    whoPlays = 'circle';
  }
};

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', gamePlayed);
}
