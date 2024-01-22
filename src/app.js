import './styles.css';
import GameBoard from './gameComponents/gameboard';
import changeTurn from './gameComponents/players';
// eslint-disable-next-line import/no-cycle
import domstuff from './domstuff';

const createComputer = () => new GameBoard();
let computer = createComputer();

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
  const player1 = new GameBoard();
  changeTurn(computer);
  randomlyPlaceShips(player1);
  randomlyPlaceShips(computer);
  // randomlyPlaceShips(computer);
  domstuff.createPlayerBoard(player1.board);
  domstuff.createPlayerBoard(computer.board, true);
  // const coordinates = randomCoordinates();
  // player1.receiveAttack(coordinates[0], coordinates[1]);
  // if (player1.checkShipsAlive() === 'game over') {
  //   console.log('Game Over! New Game');
  //   gameLoop();
  // }
  // changeTurn(player1);
  // changeTurn(computer);
};
function handleSendAttack(e) {
  const selectedSpot = e.target;
  const coordinatesString = selectedSpot.getAttribute('data-set');
  const coordinates = coordinatesString.split(',');
  console.log('receiving attack:', computer.receiveAttack(coordinates[0], coordinates[1]));
  console.log('check ships alive', computer.checkShipsAlive());
  if (computer.checkShipsAlive() === 'game over') {
    computer = createComputer();
    domstuff.reset();
    gameLoop();
  }
}

gameLoop();

export { randomlyPlaceShips, gameLoop, handleSendAttack };
