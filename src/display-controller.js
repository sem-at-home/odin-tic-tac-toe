import Game from "./game";

class DisplayController {
  constructor() {
    this.game = new Game('Sem', 'Jeffrey');
    this.turnDiv = document.querySelector('.turn');
    this.boardDiv = document.querySelector('.board');
    this.boardDiv.addEventListener('click', this.clickHandleBoard.bind(this));
    this.updateScreen();
  }

  updateTurnDiv() {
    const activePlayer = this.game.getActivePlayer();
    this.turnDiv.textContent = `${activePlayer.name}'s turn`;
  }

  updateBoard() {
    const board = this.game.gameboard.getBoard();
    board.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        const cellButton = document.createElement('button');
        cellButton.classList.add('cell');
        cellButton.dataset.row = rowIndex;
        cellButton.dataset.column = columnIndex;
        cellButton.textContent = cell.getCellSymbol()
        this.boardDiv.appendChild(cellButton);
      })
    });
  }

  updateScreen() {
    this.boardDiv.textContent = '';
    this.updateTurnDiv();
    this.updateBoard();
  }

  clickHandleBoard(event) {
    const selectedRow = event.target.dataset.row;
    const selectedColumn = event.target.dataset.column;
    if(!selectedRow || !selectedColumn) return;
    this.game.playRound(selectedRow, selectedColumn);
    this.updateScreen();
  }
}

export default DisplayController;