'use strict';

console.log('You better work, b*tch!');

/* placing cross/ circle where clicked and switching the cross/ cirsle icon on the top ribbon */
let whoPlays = 'circle';

const player = document.querySelector('.player');

const gamePlayed = (event) => {
  if (whoPlays === 'circle') {
    event.target.classList.add('selectedCircle');
    event.target.setAttribute('disabled', true);
    player.className = 'player playerCross';
    whoPlays = 'cross';
  } else {
    event.target.classList.add('selectedCross');
    player.className = 'player playerCircle';
    event.target.setAttribute('disabled', true);
    whoPlays = 'circle';
  }
};

const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', gamePlayed);
}

/* !!! 5th part starts here !!! */

/* getting click position - row and column number */

const boardSize = 10; // 10x10
const fields = document.querySelectorAll('.button');

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length) {
    if (field === fields[fieldIndex]) {
      break;
    }
    fieldIndex++;
  }

  return {
    row: Math.floor(
      fieldIndex / boardSize,
    ) /* this will be use as the input variables for the following function */,
    column: fieldIndex % boardSize,
  };
};

/* getting the exact field position */

const getField = (row, column) => fields[row * boardSize + column];

/* getting content of a field */

const getSymbol = (field) => {
  // Název třídy přizpůsob tvému kódu.
  if (field.classList.contains('selectedCross')) {
    return 'cross';
  } else if (field.classList.contains('selectedCircle')) {
    return 'circle';
  }
};

/* 
- the click event that triggers the cross/circle appearance on the field must also return back the position and info whether there was a circle or cross placed

- the position will be used by the getField function which gives field number

- I need two empty errays, one for circles, one for cross - getSymbol will determine to which array the field number will be added

- what I need the array to do is when nmber is added, to sort the number from biggest to smallest

- I also need a while cycle to go through the arrays with multiple ifs inside which will compare the values
*/
