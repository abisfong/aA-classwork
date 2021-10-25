const Asteroid = require("./asteroid");

function Game() {
  let canvas = document.getElementById('game-canvas');
  
  this.width = canvas.offsetWidth;
  this.height = canvas.offsetHeight;


  this.asteroids = [];
  for(let i = 0; i < Game.NUM_ASTEROIDS; i++) {
   this.addAsteroid();
  }

}

Game.DIM_XY = [[1,0], [-1,0], [1,1], [-1,-1], [-1,1], [1,1], [0,1], [0,-1]];
Game.NUM_ASTEROIDS = 8;

Game.prototype.addAsteroid = function () {
  // Game grid 1100(w) x 800(h)
  let newAsteroid = new Asteroid({ pos: this.randPos(), game: this });
  // console.log(this);
  // console.log(newAsteroid);
  this.asteroids.push(newAsteroid)
}

Game.prototype.randPos = function () {
  return [Math.random()*this.width, Math.random()*this.height];
}

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0,0, this.width, this.height);
  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].draw(ctx);
  }
}

Game.prototype.moveObjects = function(){
  for (let i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move(); 
  }
}

Game.prototype.wrap = function (pos) {
  return [pos[0] % this.width, pos[1] % this.height]
}

Game.prototype.checkCollisions = function (){
  let collidedObjects = [];
  for (let i = 0; i < this.asteroids.length; i++) {
    for (let j = i + 1; j < this.asteroids.length; j++) {
      if (this.asteroids[i].isCollidedWith(this.asteroids[j])){
        collidedObjects.push([this.asteroids[i], this.asteroids[j]]);
      } 
    }
  }
  return collidedObjects;
}

Game.prototype.step = function () {
  this.moveObjects();
  let collidedObjects = this.checkCollisions();
  for (let i = 0; i < collidedObjects.length; i++) {
    collidedObjects[i][0].collideWith(collidedObjects[i][1]);    
  }
}

Game.prototype.remove = function (asteroid) {
  for (let i = 0; i < this.asteroids.length; i++) {
    if (this.asteroids[i] === asteroid) {
      this.asteroids.splice(i, 1);
      return true;
    }
  }
}

module.exports = Game; 