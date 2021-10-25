const Util = {
  inherits(child, parent) {
    function Surrogate() {}
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
    child.prototype.constructor = child;
  },

  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    // why do we start with a scaled vector?
    return Util.scale([Math.sin(deg), Math.cos(deg)], length); 
  },

  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};

module.exports = Util;