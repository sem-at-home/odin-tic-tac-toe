class Cell {
  constructor() {
    this.value = 0
  }

  addToken(playerId) {
    this.value = playerId;
  }

  getValue() {
    return this.value;
  }
}

export default Cell;