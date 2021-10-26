class View {
  constructor(game, el) {
    this.setupBoard();
    el.appendChild(this.grid);
  }

  setupBoard() {
    this.grid = document.createElement("ul");
    for (let i = 0; i < 9; i++)
      this.grid.appendChild(document.createElement("li"));
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
