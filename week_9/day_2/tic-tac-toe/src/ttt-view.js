class View {
  constructor(game, container) {
    this.container = container;
    this.game = game;
    this.setupBoard();
    this.bindEvents();
  }
  
  setupBoard() {
    this.grid = document.createElement("ul");
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
    this.container.addEventListener("click", this.handClick);
  }

  handleClick(event) {
    let square = event.target;
    this.makeMove(square);
  }

  makeMove(square) {
    let pos = square.dataset.pos.split(',').map(el => parseInt(el))
    
    try {
      this.game.playMove(pos);
      square.style.backgroundColor = "white";
    } catch (error) {
      alert(error);
    }
  }

}

module.exports = View;
