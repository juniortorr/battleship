import GameBoard from '../gameComponents/gameboard';

test('return ship and coordinates', () => {
  const playerBoard = new GameBoard();
  playerBoard.placeShip(5, 6, playerBoard.smallShip, 'horizontal');
  expect(playerBoard.board[6][5]).toEqual({
    hitTracker: 0,
    length: 2,
    sunk: false,
  });
});

test('return array of coordinates of placed ship', () => {
  const playerBoard = new GameBoard();
  expect(playerBoard.placeShip(5, 6, playerBoard.smallShip, 'horizontal')).toEqual([
    [5, 6],
    [6, 6],
  ]);
});

test('return alert when out of bounds', () => {
  const playerBoard = new GameBoard();
  expect(playerBoard.placeShip(9, 5, playerBoard.smallShip, 'horizontal')).toMatch(
    'invalid coordinates'
  );
});

test('return missed it', () => {
  const playerBoard = new GameBoard();
  playerBoard.placeShip(5, 6, playerBoard.smallShip, 'horizontal');
  playerBoard.receiveAttack(4, 5);
  expect(playerBoard.missedAttacks).toBe(1);
});

// test('return hit tracker on successful hit', () => {
//   const playerBoard = new GameBoard();
//   playerBoard.placeShip(5, 6, playerBoard.smallShip, 'horizontal');
//   expect(playerBoard.receiveAttack(5, 6)).toBe(1);
// });

test('sunk ship', () => {
  const playerBoard = new GameBoard();
  playerBoard.placeShip(5, 6, playerBoard.smallShip, 'horizontal');
  playerBoard.receiveAttack(5, 6);
  expect(playerBoard.receiveAttack(6, 6)).toMatch('sunk!');
});
