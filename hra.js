'use strict';

console.log('You better work, b*tch!');

/* 
jedna funkce na přehození "kdo hraje"
druhá na tah na poli
třetí na spojení obou výše - tu spustí kliknutí

- bonus (disable a animace)
*/

/*
const switchPlayer = () => {
  const witchPlayer = document.getElementById('player');
  witchPlayer.classList.toggle('playerCross');
};

const btnElm = document.querySelector('.btn1');
btnElm.addEventListener('click', switchPlayer);
*/

const switchPlayer = (event) => {
  event.target.classList.toggle('playerCross');
};

document.querySelector('.btn1').addEventListener('click', switchPlayer);

const circlePlayed = (event) => {
  event.target.classList.add('selectedCircle');
};

document.querySelector('#btn1').addEventListener('click', circlePlayed);
