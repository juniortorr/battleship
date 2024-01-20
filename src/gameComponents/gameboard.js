import Ship from './ship';

export default class GameBoard {
  constructor() {
    this.board = [...new Array(10)].map(() => new Array(10).fill(null));
    this.missedAttacks = 0;
    this.shipsAlive = 5;
    this.smallShip = new Ship(2);
    this.medShip = new Ship(3);
    this.lrgShip = new Ship(5);
  }

  horizontalShipPlace(x, y, ship, coordinatesArr) {
    let xInt = x;
    let { length } = ship;
    while (length !== 0) {
      if (xInt + (length - 1) > 9 || xInt < 0) {
        return 'invalid coordinates';
      }
      this.board[y][xInt] = ship;
      coordinatesArr.push([xInt, y]);
      length -= 1;
      xInt += 1;
    }
    return 'success!';
  }

  verticalShipPlace(x, y, ship, coordinatesArr) {
    let yInt = y;
    let { length } = ship;
    while (length !== 0) {
      if (yInt + (length - 1) > 9 || yInt < 0) {
        return 'invalid coordinates';
      }
      this.board[yInt][x] = ship;
      coordinatesArr.push([yInt, x]);
      length -= 1;
      yInt += 1;
    }
    return 'success!';
  }

  placeShip(x, y, ship, direction) {
    const coordinatesArr = [];
    let results;
    if (direction === 'horizontal') {
      results = this.horizontalShipPlace(x, y, ship, coordinatesArr);
    } else if (direction === 'vertical') {
      results = this.verticalShipPlace(x, y, ship, coordinatesArr);
    }
    if (results === 'invalid coordinates') {
      return results;
    }
    return coordinatesArr;
  }

  receiveAttack(x, y) {
    if (x > 9 || x < 0 || y > 9 || y < 0) {
      return 'invalid coordinates';
    }
    if (this.board[y][x] === null) {
      this.missedAttacks += 1;
      return `missed! ${this.missedAttacks}`;
    }
    const ship = this.board[y][x];
    const hitResults = ship.hit();
    if (hitResults === 'sunk!') {
      this.shipsAlive -= 1;
    }
    return hitResults;
  }
}
