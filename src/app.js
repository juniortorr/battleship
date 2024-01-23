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
    player.placeShip(coordinates[0], coordinates[1], ship, coordinates[2]);
  });
  return 'success';
};

const gameLoop = () => {
  randomlyPlaceShips(player1);
  randomlyPlaceShips(computer);
  computer.setComputerChoiceBank();
  domstuff.createPlayerBoard(player1.board);
  domstuff.createPlayerBoard(computer.board, true);
};

const handleGameOver = () => {
  computer = createPlayer();
  player1 = createPlayer();
  domstuff.reset();
  gameLoop();
};

const checkHitResults = (results, spot) => {
  if (results.includes('hit!')) {
    domstuff.targetHit(spot);
    return console.log('player 1 hit');
  }
  if (results.includes('miss')) {
    domstuff.targetMissed(spot);
    return console.log('computer missed ya nerd');
  }
  if (results === 'game over') {
    return handleGameOver();
  }
  return results;
};

// Event Handlers ======>

function handleComputerAttack() {
  const choice = computer.getComputerChoice();
  const spot = domstuff.getSpot(choice);
  const hitResults = player1.receiveAttack(choice[0], choice[1]);
  console.log('player checking fleet:', player1.checkShipsAlive());
  return checkHitResults(hitResults, spot);
}

function handleSendAttack(e) {
  const selectedSpot = e.target;
  const coordinatesString = selectedSpot.getAttribute('data-set');
  const coordinates = coordinatesString.split(',');
  const hitResults = computer.receiveAttack(coordinates[0], coordinates[1]);
  return checkHitResults(hitResults, selectedSpot);
}

gameLoop();
console.log(computer.computerCopy);

export { randomlyPlaceShips, gameLoop, handleSendAttack, handleGameOver, handleComputerAttack };
