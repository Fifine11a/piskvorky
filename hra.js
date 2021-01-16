'use strict';

console.log('You better work, b*tch!');

let whoPlays = 'circle';
let i = 0;

const player = document.querySelector('.player');
const buttons = document.querySelectorAll('button');

const gamePlayed = (event) => {
  if (whoPlays === 'circle') {
    event.target.classList.add('selectedCircle');
    event.target.setAttribute('disabled', true);
    player.className = 'player playerCross';
    winnerAnnounced(event.target);
    whoPlays = 'cross';
  } else {
    event.target.classList.add('selectedCross');
    player.className = 'player playerCircle';
    event.target.setAttribute('disabled', true);
    winnerAnnounced(event.target);
    whoPlays = 'circle';
  }
};

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', gamePlayed);
}

/* !!! 5th part starts here !!! */

/* getting click position - row and column number */

const boardSize = 10; /* that is 10x10 */

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < buttons.length) {
    if (field === buttons[fieldIndex]) {
      break;
    }
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

/* getting the exact DOM of the field */

const getField = (row, column) => buttons[row * boardSize + column];

/* getting the cross/ circle of the clicked field */
const getSymbol = (field) => {
  if (field.classList.contains('selectedCross')) {
    return 'cross';
  } else if (field.classList.contains('selectedCircle')) {
    return 'circle';
  }
};

/* checking for 5 symbols */

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  /* horizontally */

  let inRow = 1;
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  /* vertically */

  let inColumn = 1;

  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  /* diagonally */
};

const winnerAnnounced = (field) => {
  if (isWinningMove(field) === true) {
    if (getSymbol(field) === 'circle') {
      const confCircle = confirm('Vyhrává kolečko! Chcete hrát znovu?');
      if (confCircle === true) {
        location.reload();
      } else {
        location.href = 'index.html';
      }
    } else if (getSymbol(field) === 'cross') {
      const confCross = confirm('Vyhrává křížek! Chcete hrát znovu?');
      if (confCross === true) {
        location.reload();
      } else {
        location.href = 'index.html';
      }
    }
  }
};
