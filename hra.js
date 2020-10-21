'use strict';

console.log('You better work, b*tch!');

/* 
jedna funkce na přehození "kdo hraje"
druhá na tah na poli
třetí na spojení obou výše - tu spustí kliknutí

- bonus (disable a animace)
*/

/* kolečko na první pole */

const circlePlayed = (event) => {
  event.target.classList.add('selectedCircle');
};

document.querySelector('#btn1').addEventListener('click', circlePlayed);

/* křížek na druhé pole */
const crossPlayed = (event) => {
  event.target.classList.add('selectedCross');
};

document.querySelector('#btn2').addEventListener('click', crossPlayed);
