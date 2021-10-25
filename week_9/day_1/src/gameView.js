//keeping track of canvas objects, game and ship
//set intertval to animate game
//bind key handlers to ship so we can whip it around

const Game = require("./game");

function GameView(ctx){
  this.ctx = ctx;
  this.game = new Game();
}

GameView.prototype.start = function (){
  setInterval(() => {
    this.game.step();
    // console.log(this);
    // console.log();
    this.game.draw(this.ctx); 
  }, 20); 
}

module.exports = GameView; 