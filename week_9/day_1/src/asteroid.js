const MovingObject = require('./movingObject.js');
const Util = require('./utils.js');



function Asteroid(options) {
  MovingObject.call(this, {
    pos: options.pos, 
    radius: options.radius || 30, 
    vel: Util.randomVec(5), 
    color: options.color || "blue"
  }); 
}

Util.inherits(Asteroid, MovingObject); 
module.exports = Asteroid; 