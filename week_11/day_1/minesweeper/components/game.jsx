import React from 'react';
import ReactDOM from 'react-dom';
import { Board } from '../minesweeper';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    const board = new Board(9, 10);
    this.state = { board };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(event) {

  }

  render() {
    return (
      <Board board={this.state.board} updateGame={this.updateGame}/>
    );
  }
}