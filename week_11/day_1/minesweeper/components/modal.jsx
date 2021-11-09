import React from 'react';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (!this.props.gameOver) return '';
    const resetGame = this.props.resetGame;
    const modalMessage = this.props.board.won() ? 'You win!' : 'You lose!';
    return (
      <div className="modal">
        <form className="modal-form">
          <div className="modal-msg">{modalMessage}</div>
          <button className="game-restart-btn" onClick={resetGame}>Restart Game</button>
        </form>
      </div>
    )
  }
}