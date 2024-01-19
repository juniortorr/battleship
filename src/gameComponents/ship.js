export default class Ship {
  constructor(length) {
    this.length = length;
    this.hitTracker = 0;
    this.sunk = false;
  }

  hit() {
    this.hitTracker += 1;
    return this.hitTracker;
  }

  isSunk() {
    if (this.hitTracker === this.length) {
      this.sunk = true;
      return true;
    }
    return this.hitTracker();
  }
}
