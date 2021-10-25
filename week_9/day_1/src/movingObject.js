function MovingObject(options){
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color; 
}

MovingObject.prototype = function draw(ctx){
  //draw circle of appriorte raduis centered at position 
  ctx.beginPath(); 
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
  ctx.stroke();
  ctx.fillStyle = "brown"; 
  ctx.fill();
  
}


module.exports = MovingObject; 