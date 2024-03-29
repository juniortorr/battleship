import './styles.css';
import GameBoard from './gameComponents/gameboard';
// eslint-disable-next-line import/no-cycle
import domstuff from './domstuff';

const createPlayer = () => new GameBoard();
let computer = createPlayer();
let player1 = createPlayer();
let currentDirection = 'horizontal';

const randomDirection = () => {
  if (Math.floor(Math.random() * 10) < 5) {
    return 'horizontal';
  }
  return 'vertical';
};

const randomCoordinates = (ship, board) => {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);
  const direction = randomDirection();
  let results;
  if (board[y][x] !== null) {
    return randomCoordinates(ship, board);
  }
  if (direction === 'horizontal' && x + (ship.length - 1) <= 9) {
    results = [x, y, direction];
  } else if (direction === 'vertical' && y + (ship.length - 1) <= 9) {
    results = [x, y, direction];
  } else {
    return randomCoordinates(ship, board);
  }
  return results;
};

const randomlyPlaceShips = (player) => {
  const allShips = [player.smallShip, player.medShip, player.lrgShip];
  allShips.forEach((ship) => {
    const coordinates = randomCoordinates(ship, player.board);
    if (
      player.placeShip(coordinates[0], coordinates[1], ship, coordinates[2]) ===
      'invalid coordinates'
    ) {
      const newCoordinates = randomCoordinates(ship, player.board);
      player.placeShip(newCoordinates[0], newCoordinates[1], ship, newCoordinates[2]);
    }
  });
  console.log(player.board);
  return 'success';
};

const gameLoop = () => {
  randomlyPlaceShips(computer);
  computer.setComputerChoiceBank();
  domstuff.createPlayerBoard(player1.board);
  domstuff.createPlayerBoard(computer.board, true);
  domstuff.createShipList(player1);
  domstuff.updateMissedShotsUI();
};

const handleGameOver = () => {
  domstuff.resetUI();
  computer = createPlayer();
  player1 = createPlayer();
  domstuff.resetBoard();
  gameLoop();
};

const getMissedShotData = () => [player1.missedAttacks, computer.missedAttacks];

const checkHitResults = (results, spot) => {
  if (results.includes('hit!')) {
    domstuff.targetHit(spot);
    return console.log('hit');
  }
  if (results.includes('miss')) {
    domstuff.targetMissed(spot);
    return console.log('missed');
  }
  if (results === 'game over') {
    return domstuff.showGameOverPopup();
  }
  console.log(results);
  return results;
};

// Event Handlers ======>

function handleDrop(e) {
  e.preventDefault();
  const coordinates = e.target.getAttribute('data-set').split(',');
  const data = e.dataTransfer.getData('text');
  const shipIcon = document.getElementById(data);
  const length = Number(shipIcon.getAttribute('id'));

  player1.allShips.forEach((boat) => {
    if (boat.length === length) {
      if (
        player1
          .placeShip(Number(coordinates[0]), Number(coordinates[1]), boat, currentDirection)
          .includes('invalid coordinates')
      ) {
        console.log('error! cannot place ship');
        console.log(player1.board);
      } else {
        e.target.appendChild(shipIcon);
        shipIcon.setAttribute('draggable', false);
        shipIcon.setAttribute('data-set', coordinates);
        shipIcon.classList.add('battleship');
        shipIcon.classList.remove('player-1-ship');
      }
    }
  });
  if (player1.getShipsToPlace() < 1) {
    domstuff.showRoundSetup();
    console.log(player1.board);
  }
}

function handleSliderToggle() {
  if (currentDirection === 'horizontal') {
    currentDirection = 'vertical';
  } else {
    currentDirection = 'horizontal';
  }
  domstuff.toggleSlider();
}

function handleDragStart(e) {
  e.dataTransfer.setData('text', e.target.id);
}

function handleComputerAttack() {
  const choice = computer.getComputerChoice();
  const spot = domstuff.getSpot(choice);
  const hitResults = player1.receiveAttack(choice[0], choice[1]);
  console.log('player ships alive:', player1.checkShipsAlive());
  if (player1.checkShipsAlive() === 'game over') {
    return domstuff.showGameOverPopup();
  }
  return checkHitResults(hitResults, spot);
}

function handleSendAttack(e) {
  const selectedSpot = e.target;
  if (selectedSpot.hasAttribute('data-targeted')) {
    return alert('dont do this');
  }
  const coordinatesString = selectedSpot.getAttribute('data-set');
  const coordinates = coordinatesString.split(',');
  const hitResults = computer.receiveAttack(coordinates[0], coordinates[1]);
  console.log('computer ships alive:', computer.checkShipsAlive());
  if (computer.checkShipsAlive() === 'game over') {
    return domstuff.showGameOverPopup();
  }
  handleComputerAttack();
  domstuff.updateMissedShotsUI();
  return checkHitResults(hitResults, selectedSpot);
}

gameLoop();

export {
  randomlyPlaceShips,
  gameLoop,
  handleSendAttack,
  handleGameOver,
  handleComputerAttack,
  handleDragStart,
  handleDrop,
  handleSliderToggle,
  getMissedShotData,
};
