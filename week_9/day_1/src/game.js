const Asteroid = require("./asteroid");

function Game() {
  // do we need to accept arguments?
  this.asteroids = [];
  for(let i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids.push(this.addAsteroid())
  }
}

Game.DIM_XY = [[1,0], [-1,0], [1,1], [-1,-1], [-1,1], [1,1], [0,1], [0,-1]];
Game.NUM_ASTEROIDS = 20;

Game.prototype.addAsteroid = function () {
  // Game grid 1100(w) x 800(h)
  let newAsteroid = new Asteroid({ pos: this.randPos() });
  this.asteroids.push(newAsteroid)
}

Game.prototype.randPos = function (width=1100, height=800) {
  return [Math.random(0, width), Math.random(0, height)];
}

Game.prototype.draw = function (ctx) {
  ctx.clearRect();
}