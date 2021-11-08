import React from 'react';
import Tile from './tile';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const board = this.props.board;
    return (
      <div className='board-div'>
        {
          board.grid.map((row, i) => {
            return (
              <div key={i} className='tile-row'>
                {
                  row.map((tile, j) => {
                    return <Tile tile={tile} updateGame={this.props.updateGame} key={j}/>
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