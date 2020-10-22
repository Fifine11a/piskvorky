'use strict';

console.log('You better work, b*tch!');

let player = 'circle';

if (document.getElementById('player').classList.contains('.playerCross')) {
  const crossPlayed = (event) => {
    event.target.classList.add('selectedCross');
  };

  const buttons = document.querySelectorAll('button');

  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', crossPlayed);
  }

  document.getElementById('player').classList.toggle('.playerCross');

  player = 'circle';
} else {
  const circlePlayed = (event) => {
    event.target.classList.add('selectedCircle');
  };

  const buttons = document.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', circlePlayed);
  }

  document.getElementById('player').classList.toggle('.playerCross');

  player = 'cross';
}
