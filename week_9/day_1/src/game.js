const Asteroid = require("./asteroid");

function Game() {
  let canvas = document.getElementById('game-canvas');
  
  this.asteroids = [];
  for(let i = 0; i < Game.NUM_ASTEROIDS; i++) {
   this.addAsteroid();
  }
  this.width = canvas.style.width;
  this.height = canvas.style.height;
}

Game.DIM_XY = [[1,0], [-1,0], [1,1], [-1,-1], [-1,1], [1,1], [0,1], [0,-1]];
Game.NUM_ASTEROIDS = 20;

Game.prototype.addAsteroid = function () {
  // Game grid 1100(w) x 800(h)
  let newAsteroid = new Asteroid({ pos: this.randPos(), game: this });
  // console.log(this);
  // console.log(newAsteroid);
  this.asteroids.push(newAsteroid)
}

Game.prototype.randPos = function (width=this.width, height=this.height) {
  return [Math.random()*width, Math.random()*height];
}

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0,0, this.width, this.height);
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.asteroids[i].draw(ctx);
  }
}

Game.prototype.moveObjects = function(){
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.asteroids[i].move(); 
  }
}

Game.prototype.wrap = function (pos) {
  return [pos[0] % this.width, pos[1] % this.height]
}

module.exports = Game; 