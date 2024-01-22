import './styles.css';
import GameBoard from './gameComponents/gameboard';
import changeTurn from './gameComponents/players';
import domstuff from './domstuff';

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
  const computer = new GameBoard();
  changeTurn(computer);
  randomlyPlaceShips(player1);
  // randomlyPlaceShips(computer);
  domstuff.createPlayerBoard(player1.board);
  // const coordinates = randomCoordinates();
  // player1.receiveAttack(coordinates[0], coordinates[1]);
  // if (player1.checkShipsAlive() === 'game over') {
  //   console.log('Game Over! New Game');
  //   gameLoop();
  // }
  // changeTurn(player1);
  // changeTurn(computer);
};

gameLoop();

export { randomlyPlaceShips, gameLoop };
