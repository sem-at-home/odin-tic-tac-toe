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

  getCellSymbol() {
    if (this.value === 1) {
      return"X";
    } if (this.value === 2) {
      return "O";
    } 
      return "";
  }
}

export default Cell;