function Asteroid(options) {
  this.color = options.color || "blue";
  this.radius = options.radius || 30;
  this.pos = options.pos;
  this.vel = Util.randomVec(5); // is the argument valid?
}