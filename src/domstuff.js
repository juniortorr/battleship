// eslint-disable-next-line import/no-cycle
import { handleSendAttack, handleDragStart, handleDrop, handleSliderToggle } from './app';
import shipImg from './images/boat2.png';
import shipHorizontal from './images/boat-horizontal.png';

export default (function domstuff() {
  const boardContainer = document.querySelector('.gameboard-container');
  const sliderContainer = document.querySelector('.slider-container');

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

        gridUnit.addEventListener('drop', handleDrop);
        if (computer === true) {
          playerContainer.classList.add('computer-container', 'hide');
          gridUnit.addEventListener('click', handleSendAttack);
        } else {
          gridUnit.addEventListener('dragover', (e) => {
            e.preventDefault();
          });
        }
        gridRow.append(gridUnit);
      }
    });
  };

  const removeHiddenClass = () => {
    const computerContainer = document.querySelector('.computer-container');
    computerContainer.classList.remove('hide');
    sliderContainer.classList.add('hide');
  };

  const createShipList = (player) => {
    const shipContainer = document.querySelector('.ship-container');
    const shipClasses = ['smallShip-horizontal', 'medShip-horizontal', 'largeShip-horizontal'];
    player.allShips.forEach((boat) => {
      const shipIcon = document.createElement('img');
      shipIcon.src = shipHorizontal;
      shipIcon.classList.add(shipClasses[0], 'player-1-ship');
      shipIcon.setAttribute('id', boat.length);
      shipIcon.setAttribute('draggable', true);
      shipIcon.addEventListener('dragstart', handleDragStart);
      shipContainer.append(shipIcon);
      shipClasses.splice(0, 1);
    });
  };

  const targetMissed = (unit) => {
    unit.classList.add('missed');
    unit.setAttribute('data-targeted', true);
  };

  const targetHit = (unit) => {
    unit.classList.add('hit');
    unit.setAttribute('data-targeted', true);
  };

  const getSpot = (coordinates) => {
    const spot = document.querySelector(`[data-set="${coordinates[0]},${coordinates[1]}"]`);
    return spot;
  };

  const turnShips = () => {
    const ships = document.querySelectorAll('.player-1-ship');
    const container = document.querySelector('.ship-container');
    ships.forEach((boat) => {
      const shipDom = boat;
      if (shipDom.src === shipHorizontal) {
        shipDom.setAttribute('src', shipImg);
        if (Number(shipDom.id) === 2) {
          shipDom.classList.add('small-ship-vertical');
        }
        if (Number(shipDom.id) === 3) {
          shipDom.classList.add('med-ship-vertical');
        }
        if (Number(shipDom.id) === 5) {
          shipDom.classList.add('large-ship-vertical');
        }
      } else {
        shipDom.setAttribute('src', shipHorizontal);
        if (Number(shipDom.id) === 2) {
          shipDom.classList.remove('small-ship-vertical');
        }
        if (Number(shipDom.id) === 3) {
          shipDom.classList.remove('med-ship-vertical');
        }
        if (Number(shipDom.id) === 5) {
          shipDom.classList.remove('large-ship-vertical');
        }
      }
    });
    if (container.classList.contains('ship-container-vertical')) {
      container.classList.remove('ship-container-vertical');
    } else {
      container.classList.add('ship-container-vertical');
    }
  };

  const toggleSlider = () => {
    const slider = document.querySelector('#slider');
    if (slider.classList.contains('horizontal')) {
      slider.classList.remove('horizontal');
      slider.classList.add('vertical');
    } else {
      slider.classList.remove('vertical');
      slider.classList.add('horizontal');
    }
    turnShips();
  };

  sliderContainer.addEventListener('click', handleSliderToggle);

  return {
    handleSendAttack,
    createPlayerBoard,
    reset,
    targetMissed,
    targetHit,
    getSpot,
    createShipList,
    toggleSlider,
    removeHiddenClass,
  };
})();
