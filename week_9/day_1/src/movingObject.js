function MovingObject(options){
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color; 
}

MovingObject.prototype.draw = function (ctx){
  //draw circle of appriorte raduis centered at position 
  ctx.beginPath(); 
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
  ctx.stroke();
  ctx.fillStyle = "brown"; 
  ctx.fill(); 
}

MoveObject.prototype.move = function () {
  this.pos[0] += this.vel;
  this.pos[1] += this.vel;
}

module.exports = MovingObject; 