const View = require("./ttt-view");
const Game = require("../ttt_node/game.js");
const Board = require("../ttt_node/board");

const game = new Game();

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementsByClassName("ttt")[0];
  const view = new View(game, container);
  window.view = view;
  // let board = new Board();
});
