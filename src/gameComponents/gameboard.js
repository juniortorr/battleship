import Ship from './ship';

export default class GameBoard {
  constructor() {
    this.board = [...new Array(10)].map(() => new Array(10).fill(null));
    this.isTurn = false;
    this.missedAttacks = 0;
    this.computerChoiceBank = null;
    this.computerChoiceOpts = 100;
    this.shipsAlive = 3;
    this.smallShip = new Ship(2);
    this.medShip = new Ship(3);
    this.lrgShip = new Ship(5);
    this.allShips = [this.smallShip, this.medShip, this.lrgShip];
    this.shipsToPlace = 3;
  }

  // eslint-disable-next-line class-methods-use-this
  setComputerChoiceBank() {
    const copy = [];
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        copy.push([i, j]);
      }
    }
    this.computerChoiceBank = copy;
  }

  horizontalShipPlace(x, y, ship, coordinatesArr) {
    let xInt = x;
    let { length } = ship;
    while (length !== 0) {
      if (xInt + (length - 1) > 9 || xInt < 0 || this.board[y][xInt] !== null) {
        console.log('invalid coordinates', x, y, ship);
        return 'invalid coordinates';
      }
      coordinatesArr.push([xInt, y]);
      length -= 1;
      xInt += 1;
    }
    console.log(coordinatesArr);
    coordinatesArr.forEach((pair) => {
      this.board[pair[1]][pair[0]] = ship;
    });
    return 'success!';
  }

  verticalShipPlace(x, y, ship, coordinatesArr) {
    let yInt = y;
    let { length } = ship;
    while (length !== 0) {
      if (yInt + (length - 1) > 9 || yInt < 0 || this.board[yInt][x] !== null) {
        console.log('invalid coordinates', x, y, ship);
        return 'invalid coordinates';
      }
      // this.board[yInt][x] = ship;
      coordinatesArr.push([yInt, x]);
      length -= 1;
      yInt += 1;
    }
    console.log(coordinatesArr);
    coordinatesArr.forEach((pair) => {
      this.board[pair[1]][pair[0]] = ship;
    });
    return 'success!';
  }

  placeShip(x, y, ship, direction) {
    const coordinatesArr = [];
    let results;
    if (this.board[y][x] !== null) {
      return 'invalid coordinates';
    }
    if (direction === 'horizontal') {
      results = this.horizontalShipPlace(x, y, ship, coordinatesArr);
    } else if (direction === 'vertical') {
      results = this.verticalShipPlace(x, y, ship, coordinatesArr);
    }
    if (results !== 'invalid coordinates') {
      this.shipsToPlace -= 1;
      console.log(this.shipsToPlace);
    }
    return results;
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
    return `hit! ${hitResults}`;
  }

  checkShipsAlive() {
    if (this.shipsAlive === 0) {
      return 'game over';
    }
    return this.shipsAlive;
  }

  getShipsToPlace() {
    return this.shipsToPlace;
  }

  // eslint-disable-next-line class-methods-use-this
  getComputerChoice() {
    const randomInt = Math.floor(Math.random() * this.computerChoiceOpts);
    const choice = this.computerChoiceBank[randomInt];
    const removeChoice = this.computerChoiceBank.splice(randomInt, 1);
    this.computerChoiceOpts -= 1;
    console.log(removeChoice, this.computerChoiceBank);
    return choice;
  }
}
