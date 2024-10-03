import Gameboard from "./gameboard"
import Player from "./player";

class Game {
  constructor(playerOneName, playerTwoName) {
    this.gameboard = new Gameboard();
    this.players = [
      new Player(playerOneName, 1),
      new Player(playerTwoName, 2)
    ];
    [this.activePlayer] = this.players;
    this.printRound();
  }

  switchPlayerTurn() {
    this.activePlayer = this.activePlayer === this.players[0] ? this.players[1] : this.players[0];
  }

  getActivePlayer() {
    return this.activePlayer;
  }

  printRound() {
    this.gameboard.printBoard();
    console.log(`${this.getActivePlayer().name}'s turn`);
  }

  printGameEnd() {
    this.gameboard.printBoard();
    console.log(`${this.getActivePlayer().name} has won!`);
  }

  printGameTie() {
    this.gameboard.printBoard();
    console.log(`The game ended in a tie!`);
  }

  playRoundOnEmptyCell(row, column) {
    console.log(`Placing ${this.getActivePlayer().name}'s token into row ${row} and column ${column}...`)
    this.gameboard.placeToken(row, column, this.getActivePlayer());
    if(this.gameboard.gameHasEnded(this.getActivePlayer().id)) {
      this.printGameEnd();
    } else if(this.gameboard.gameIsTie()) {
      this.printGameTie();
    } else {
      this.switchPlayerTurn();
      this.printRound();
    }
  }

  playRound(row, column) {
    if(this.gameboard.cellIsEmpty(row, column)) {
      this.playRoundOnEmptyCell(row, column);
    } else {
      console.log('You cannot place your token here anymore.');
    }
  }
}

export default Game