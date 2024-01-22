import './styles.css';
import GameBoard from './gameComponents/gameboard';
// eslint-disable-next-line import/no-cycle
import domstuff from './domstuff';

const createPlayer = () => new GameBoard();
let computer = createPlayer();
let player1 = createPlayer();

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
  if (board[y][x] !== null) {
    randomCoordinates(ship, board);
  } else if (direction === 'horizontal' && x + (ship.length - 1) <= 9) {
    return [x, y, direction];
  } else if (direction === 'vertical' && y + (ship.length - 1) <= 9) {
    return [x, y, direction];
  }
  return randomCoordinates(ship, board);
};

const randomlyPlaceShips = (player) => {
  const allShips = [player.smallShip, player.medShip, player.lrgShip];
  allShips.forEach((ship) => {
    const coordinates = randomCoordinates(ship, player.board);
    console.log(coordinates);
    player.placeShip(coordinates[0], coordinates[1], ship, coordinates[2]);
  });
  return 'success';
};

const gameLoop = () => {
  randomlyPlaceShips(player1);
  randomlyPlaceShips(computer);
  domstuff.createPlayerBoard(player1.board);
  domstuff.createPlayerBoard(computer.board, true);
};

const handleGameOver = () => {
  computer = createPlayer();
  player1 = createPlayer();
  domstuff.reset();
  gameLoop();
};

// Event Handlers ======>

function handleComputerAttack() {
  const choice = computer.getComputerChoice();
  console.log('player receiving attack:', player1.receiveAttack(choice[0], choice[1]));
  console.log('player checking fleet:', player1.checkShipsAlive());
  return console.log(player1.checkShipsAlive());
}

function handleSendAttack(e) {
  const selectedSpot = e.target;
  const coordinatesString = selectedSpot.getAttribute('data-set');
  const coordinates = coordinatesString.split(',');
  const hitResults = computer.receiveAttack(coordinates[0], coordinates[1]);

  if (hitResults.includes('hit!')) {
    domstuff.targetHit(selectedSpot);
    return console.log('hit');
  }
  if (hitResults.includes('miss')) {
    domstuff.targetMissed(selectedSpot);
    return console.log('miss loser');
  }
  if (hitResults === 'game over') {
    return handleGameOver();
  }
  return hitResults;
}

gameLoop();

export { randomlyPlaceShips, gameLoop, handleSendAttack, handleGameOver, handleComputerAttack };
