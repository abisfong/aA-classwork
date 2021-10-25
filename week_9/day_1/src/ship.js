const MovingObject = require("./movingObject");
const Util = require("./utils");

function Ship(options){
  MovingObject.call(this, {
    radius: 10,
    color: "Green",
    pos: options.game.randPos(),
    vel: [0,0],
    game: options.game
  });
}

Ship.prototype.relocate = function () {
  this.vel = [0, 0];
  this.pos = this.game.randPos();
}

Util.inherits(Ship, MovingObject); 

module.exports = Ship;