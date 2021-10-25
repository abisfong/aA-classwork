function MovingObject(options){
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

MovingObject.prototype.draw = function (ctx){
  //draw circle of appriorte raduis centered at position 
  ctx.beginPath(); 
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
  ctx.stroke();
  ctx.fillStyle = "brown"; 
  ctx.fill(); 
}

// TypeError: undefined is not an object (evaluating 'this.game.wrap')
MovingObject.prototype.move = function () {
  //do we need to
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  this.pos = this.game.wrap(this.pos);
}

MovingObject.prototype.isCollidedWith = function(otherObject){
  //two circles have collieded if there distance between their center points is less than the sum of thier radii
  return this.radius + otherObject.radius > euclidanDistance(this.pos, otherObject.pos);
}

function euclidanDistance(pos1, pos2){
  return Math.sqrt((pos2[0]-pos1[0])**2 +(pos2[1]-pos1[1])**2)
}

module.exports = MovingObject; 