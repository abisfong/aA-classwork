const MovingObject = require('./movingObject');
const Ship = require('./ship')
const Util = require('./utils');



function Asteroid(options) {
  MovingObject.call(this, {
    pos: options.pos, 
    radius: options.radius || 30, 
    vel: Util.randomVec(5), 
    color: options.color || "blue",
    game: options.game
  });

}

Util.inherits(Asteroid, MovingObject); 

Asteroid.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  } else {
    // do we need to keep this?
    this.game.remove(otherObject);
    this.game.remove(this);
  }
}

module.exports = Asteroid; 