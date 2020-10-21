'use strict';

console.log('You better work, b*tch!');

let player = 'circle';

if (player === 'circle') {
  const circlePlayed = (event) => {
    event.target.classList.add('selectedCircle');
  };

  const buttons = document.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', circlePlayed);
  }

  player = 'cross';
} else {
  document.getElementById('player').classList.toggle('.playerCross');

  const crossPlayed = (event) => {
    event.target.classList.add('selectedCross');
  };

  const buttons = document.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', crossPlayed);
  }

  document.getElementById('player').classList.toggle('.playerCross');

  player = 'circle';
}
