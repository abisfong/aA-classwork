const Asteroid = require("./asteroid");

function Game() {
  // do we need to accept arguments?
  this.asteroids = [];
  for(let i = 0; i < Game.NUM_ASTEROIDS; i++) {
   this.addAsteroid();
  }
  this.width = 1100;
  this.height = 800;
}

Game.DIM_XY = [[1,0], [-1,0], [1,1], [-1,-1], [-1,1], [1,1], [0,1], [0,-1]];
Game.NUM_ASTEROIDS = 20;

Game.prototype.addAsteroid = function () {
  // Game grid 1100(w) x 800(h)
  let newAsteroid = new Asteroid({ pos: this.randPos() });
  // console.log(this);
  // console.log(newAsteroid);
  this.asteroids.push(newAsteroid)
}

Game.prototype.randPos = function (width=1100, height=800) {
  return [Math.random()*width, Math.random()*height];
}

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0,0, this.width, this.height);
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids[i].draw(ctx);
  }
}

Game.prototype.moveObjects = function(){
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids[i].move(); 
  }
}

module.exports = Game; 