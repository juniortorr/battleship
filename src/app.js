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

const randomCoordinates = () => {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);
  return [x, y];
};

const randomlyPlaceShips = (player) => {
  const allShips = [player.smallShip, player.medShip, player.lrgShip];
  allShips.forEach((ship) => {
    const coordinates = randomCoordinates(player);
    player.placeShip(coordinates[0], coordinates[1], ship, randomDirection());
  });
  return 'success';
};

const gameLoop = () => {
  const player1 = new GameBoard();
  const computer = new GameBoard();
  changeTurn(computer);
  randomlyPlaceShips(player1);
  randomlyPlaceShips(computer);
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
