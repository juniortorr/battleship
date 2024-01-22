import './styles.css';
import GameBoard from './gameComponents/gameboard';
// eslint-disable-next-line import/no-cycle
import domstuff from './domstuff';
// eslint-disable-next-line import/no-cycle
import handleComputerAttack from './gameComponents/computer';

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

function handleSendAttack(e) {
  const selectedSpot = e.target;
  const coordinatesString = selectedSpot.getAttribute('data-set');
  const coordinates = coordinatesString.split(',');
  console.log(
    'computer: receiving attack:',
    computer.receiveAttack(coordinates[0], coordinates[1])
  );
  console.log('computer: check ships alive', computer.checkShipsAlive());
  if (computer.checkShipsAlive() === 'game over') {
    return handleGameOver();
  }
  if (handleComputerAttack(player1) === 'game over') {
    return handleGameOver();
  }
  return player1.checkShipsAlive();
}

gameLoop();

export { randomlyPlaceShips, gameLoop, handleSendAttack, handleGameOver };
