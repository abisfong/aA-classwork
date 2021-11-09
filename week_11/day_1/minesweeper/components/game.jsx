import React from 'react';
import Board from './board';
import Modal from './modal';
import * as Minesweeper from '../minesweeper';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    const board = new Minesweeper.Board(9, 10);
    this.state = { board };
    this.updateGame = this.updateGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  updateGame(tile, flagging) {
    flagging ? tile.toggleFlag() : tile.explore();
    this.setState({ board: this.state.board });
  }

  resetGame(event) {
    event.preventDefault();
    this.setState({ board: new Minesweeper.Board(9, 10)});
  }

  render() {
    const board = this.state.board;
    const gameOver = board.won() || board.lost();
    return (
      <div className='game-container'>
        <Board board={board} updateGame={this.updateGame}/>
        <Modal gameOver={gameOver} board={board} resetGame={this.resetGame}/>
      </div>
    );
  }
}