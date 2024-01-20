export default class Ship {
  constructor(length) {
    this.length = length;
    this.hitTracker = 0;
    this.sunk = false;
  }

  hit() {
    this.hitTracker += 1;
    this.isSunk();
    if (this.sunk === true) {
      return 'sunk!';
    }
    return this.hitTracker;
  }

  isSunk() {
    if (this.hitTracker === this.length) {
      this.sunk = true;
      return true;
    }
    return false;
  }
}
