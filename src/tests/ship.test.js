import Ship from '../gameComponents/ship';

test('returns ship sunk', () => {
  const smallShip = new Ship(2);
  smallShip.hit();
  smallShip.hit();
  expect(smallShip.isSunk()).toBeTruthy();
});
