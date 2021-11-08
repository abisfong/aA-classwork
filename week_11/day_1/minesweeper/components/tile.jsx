import React from 'react';

export default class Tile {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.type === 'click') {
      this.props.updateGame(this, false);
    } else if (event.type === 'contextmenu') {
      this.props.updateGame(this, true);
    }
  }
  
  render() {
    const tile = this.props.tile;
    let tileContent = '';
    if (tile.explored) {
      if (tile.bombed) {
        tileContent = 'bombed';
      } else {
        tileContent = `${tile.adjacentBombCount()}`;
      }
    } else if (tile.flagged) {
      tileContent = 'flagged';
    }
    return (
      <div className='tile' onClick={this.handleClick} onContextMenu={this.handleClick}>
        {tileContent}
      </div>
    );
  }
}