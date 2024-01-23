// eslint-disable-next-line import/no-cycle
import { handleSendAttack, handleComputerAttack } from './app';

export default (function domstuff() {
  const boardContainer = document.querySelector('.gameboard-container');

  const reset = () => {
    const gridRow = document.querySelector('.board-row');
    const playerContainer = document.querySelector('.player-container');
    while (gridRow.firstChild) {
      gridRow.removeChild(gridRow.firstChild);
    }
    while (playerContainer.firstChild) {
      playerContainer.removeChild(playerContainer.lastChild);
    }
    boardContainer.innerHTML = '';
  };

  const createPlayerBoard = (board, computer = false) => {
    const playerContainer = document.createElement('div');
    playerContainer.classList.add('player-container');
    boardContainer.append(playerContainer);
    board.forEach((row) => {
      const gridRow = document.createElement('div');
      const rowIndex = board.indexOf(row);
      gridRow.classList.add('board-row');
      playerContainer.prepend(gridRow);
      gridRow.setAttribute('data-row', board.indexOf(row));
      for (let i = 0; i < row.length; i += 1) {
        const gridUnit = document.createElement('div');
        const spotIndex = i;
        if (row[i] !== null) {
          gridUnit.classList.add('ship');
        }
        gridUnit.classList.add('board-unit');
        gridUnit.setAttribute('data-set', [spotIndex, rowIndex]);
        if (computer === true) {
          gridUnit.addEventListener('click', handleSendAttack);
          gridUnit.addEventListener('click', handleComputerAttack);
          gridUnit.classList.add('computer');
        }
        gridRow.append(gridUnit);
      }
    });
  };

  const targetMissed = (unit) => {
    unit.classList.add('missed');
    unit.setAttribute('missed', true);
  };

  const targetHit = (unit) => {
    unit.classList.add('hit');
    unit.setAttribute('hit', true);
  };

  const getSpot = (coordinates) => {
    const spot = document.querySelector(`[data-set="${coordinates[0]},${coordinates[1]}"]`);
    return spot;
  };

  return { handleSendAttack, createPlayerBoard, reset, targetMissed, targetHit, getSpot };
})();
