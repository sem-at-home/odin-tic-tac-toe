import Cell from "./cell";

class Gameboard {
  constructor() {
    this.rows = 3;
    this.columns = 3;
    this.board = []
    for (let row = 0; row < this.rows; row+=1) {
      this.board[row] = [];
      for (let column = 0; column < this.columns; column+=1) {
        this.board[row].push(new Cell());
      }
    }
  }

  getBoard() {
    return this.board
  }

  cellIsEmpty(row, column) {
    return this.board[row][column].getValue() === 0;
  }

  placeToken(row, column, player) {
    this.board[row][column].addToken(player.id)
  }

  completeRow(playerId) {
    return this.board.some((row) => row.every((cell) => cell.getValue() === playerId))
  }

  completeColumn(playerId) {
    const columnIndexes = Array(this.columns).keys()
    return columnIndexes.some((column) => this.board.every((row) => row[column].getValue() === playerId));
  }

  completeDiagonal(playerId) {
    return (
      [this.board[0][0], this.board[1][1], this.board[2][2]].every((cell) => cell.getValue() === playerId) ||
      [this.board[0][2], this.board[1][1], this.board[2][0]].every((cell) => cell.getValue() === playerId)
    );
  }

  gameHasEnded(playerId) {
    return this.completeRow(playerId) || this.completeColumn(playerId) || this.completeDiagonal(playerId);
  }

  gameIsTie() {
    const flattenedGameboard = this.board.flat()
    return flattenedGameboard.every((cell) => cell.getValue() !== 0)
  }

  printBoard() {
    const boardWithCellValues = this.board.map((row) => row.map((cell) => cell.getValue()))
    console.log(boardWithCellValues);
  }
}

export default Gameboard;