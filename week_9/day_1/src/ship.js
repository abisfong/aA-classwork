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


Util.inherits(ship, MovingObject); 

module.exports = Ship;