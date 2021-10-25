const Asteroid = require("./asteroid");
const Ship = require("./ship");

function Game() {
  let canvas = document.getElementById('game-canvas');
  
  this.width = canvas.offsetWidth;
  this.height = canvas.offsetHeight;

  this.ship = new Ship({game: this});

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
  let allObjs = this.allObjects();
  ctx.clearRect(0,0, this.width, this.height);
  for (let i = 0; i < allObjs.length; i++) {
    allObjs[i].draw(ctx);
  }
}

Game.prototype.moveObjects = function(){
  let allObjs = this.allObjects();
  for (let i = 0; i < allObjs.length; i++) {
    allObjs[i].move(); 
  }
}

Game.prototype.wrap = function (pos) {
  return [
    pos[0] < 0 ? this.width : pos[0] % this.width, 
    pos[1] < 0 ? this.height : pos[1] % this.height
  ]
}

Game.prototype.checkCollisions = function (){
  let allObjs = this.allObjects();
  let collidedObjects = [];
  for (let i = 0; i < allObjs.length; i++) {
    for (let j = i + 1; j < allObjs.length; j++) {
      if (allObjs[i].isCollidedWith(allObjs[j])){
        collidedObjects.push([allObjs[i], allObjs[j]]);
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

Game.prototype.allObjects = function() {
  return [...this.asteroids, this.ship]
}

module.exports = Game; 