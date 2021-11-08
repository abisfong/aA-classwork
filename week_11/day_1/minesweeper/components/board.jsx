import React from 'react';
import Tile from './tile';

export default class Board {
  constructor(props) {
    super(props);

  }

  render() {
    const board = this.props.board;
    return (
      <div>
        {
          board.grid.map((row, i) => {
            return (
              <div key={i}>
                {
                  row.map((tile, j) => {
                    <Tile tile={tile} updateGame={this.props.updateGame} key={j}/>
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}