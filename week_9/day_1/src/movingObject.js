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

module.exports = MovingObject; 