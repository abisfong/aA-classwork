import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    const board = new Minesweeper.Board(9, 10);
    this.state = { board };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, flagging) {
    flagging ? tile.toggleFlag() : tile.explore();
    this.setState({ board: this.state.board });
  }

  render() {
    const board = this.state.board
    return (
      <div>
        <Board board={board} updateGame={this.updateGame}/>
        <div>
          {board.won() ? 'You won!' : ''}
          {board.lost() ? 'You lost!' : ''}
        </div>
      </div>
    );
  }
}