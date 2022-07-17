class GuessingGame {
  constructor() {
    this.start = 0;
    this.end = 0;
    this.gue = 0;
  }

  setRange(min, max) {
    this.start = min;
    this.end = max;
  }

  guess() { 
    return this.gue = Math.ceil((this.start + this.end) / 2)
  }

  lower() {
    this.end = this.gue;
  }

  greater() {
    this.start = this.gue;
  }
}

module.exports = GuessingGame;
