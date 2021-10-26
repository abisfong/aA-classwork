class View {
  constructor(game, el) {}

  setupBoard() {
    this.grid = document.createElement("ul");
    for (i = 0; i < 9; i++) {
      grid.appendChild(document.createElement("li"));
    }
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
