const Game = require("../ttt_node/game");

class View {
  constructor(game, container) {
    this.container = container;
    this.game = game;
    this.setupBoard();
    this.bindEvents();
  }
  
  setupBoard() {
    this.grid = document.createElement("ul");
    // this.grid.children = null;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let li = document.createElement("li");
        li.setAttribute(`data-pos`, `${i},${j}`);
        li.setAttribute(`data-checked`, 'false');
        this.grid.appendChild(li);
      }
    }
    this.container.appendChild(this.grid);
  }
  
  bindEvents() {
    this.container.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick(event) {
    let square = event.target;
    if (!this.game.isOver()) this.makeMove(square);
  }

  makeMove(square) {
    let pos = square.dataset.pos.split(',').map(el => parseInt(el))
    
    try {
      this.game.playMove(pos);
      square.dataset.checked = "true";
      square.innerHTML = this.game.currentPlayer;
      // square.style.backgroundColor = "white";

      if (this.game.isOver()) {
        alert(`${this.game.winner()} won!`);
      }
    } catch (error) {
      alert(error);
    }
  }

}

module.exports = View;
