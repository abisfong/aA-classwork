/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./movingObject */ \"./src/movingObject.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\")\nconst Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\nfunction Asteroid(options) {\n  MovingObject.call(this, {\n    pos: options.pos, \n    radius: options.radius || 30, \n    vel: Util.randomVec(5), \n    color: options.color || \"blue\",\n    game: options.game\n  });\n\n}\n\nUtil.inherits(Asteroid, MovingObject); \n\nAsteroid.prototype.collideWith = function (otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.relocate();\n  } else {\n    // do we need to keep this?\n    this.game.remove(otherObject);\n    this.game.remove(this);\n  }\n}\n\nmodule.exports = Asteroid; \n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nfunction Game() {\n  let canvas = document.getElementById('game-canvas');\n  \n  this.width = canvas.offsetWidth;\n  this.height = canvas.offsetHeight;\n\n  this.ship = new Ship({game: this});\n\n  this.asteroids = [];\n  for(let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n   this.addAsteroid();\n  }\n\n}\n\nGame.DIM_XY = [[1,0], [-1,0], [1,1], [-1,-1], [-1,1], [1,1], [0,1], [0,-1]];\nGame.NUM_ASTEROIDS = 8;\n\nGame.prototype.addAsteroid = function () {\n  // Game grid 1100(w) x 800(h)\n  let newAsteroid = new Asteroid({ pos: this.randPos(), game: this });\n  this.asteroids.push(newAsteroid)\n}\n\nGame.prototype.randPos = function () {\n  return [Math.random()*this.width, Math.random()*this.height];\n}\n\nGame.prototype.draw = function (ctx) {\n  let allObjs = this.allObjects();\n  ctx.clearRect(0,0, this.width, this.height);\n  for (let i = 0; i < allObjs.length; i++) {\n    allObjs[i].draw(ctx);\n  }\n}\n\nGame.prototype.moveObjects = function(){\n  let allObjs = this.allObjects();\n  for (let i = 0; i < allObjs.length; i++) {\n    allObjs[i].move(); \n  }\n}\n\nGame.prototype.wrap = function (pos) {\n  return [\n    pos[0] < 0 ? this.width : pos[0] % this.width, \n    pos[1] < 0 ? this.height : pos[1] % this.height\n  ]\n}\n\nGame.prototype.checkCollisions = function (){\n  let allObjs = this.allObjects();\n  let collidedObjects = [];\n  for (let i = 0; i < allObjs.length; i++) {\n    for (let j = i + 1; j < allObjs.length; j++) {\n      if (allObjs[i].isCollidedWith(allObjs[j])){\n        collidedObjects.push([allObjs[i], allObjs[j]]);\n      } \n    }\n  }\n  return collidedObjects;\n}\n\nGame.prototype.step = function () {\n  this.moveObjects();\n  let collidedObjects = this.checkCollisions();\n  for (let i = 0; i < collidedObjects.length; i++) {\n    collidedObjects[i][0].collideWith(collidedObjects[i][1]);    \n  }\n}\n\nGame.prototype.remove = function (asteroid) {\n  for (let i = 0; i < this.asteroids.length; i++) {\n    if (this.asteroids[i] === asteroid) {\n      this.asteroids.splice(i, 1);\n      return true;\n    }\n  }\n}\n\nGame.prototype.allObjects = function() {\n  return [...this.asteroids, this.ship]\n}\n\nmodule.exports = Game; \n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameView.js":
/*!*************************!*\
  !*** ./src/gameView.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("//keeping track of canvas objects, game and ship\n//set intertval to animate game\n//bind key handlers to ship so we can whip it around\n\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(ctx){\n  this.ctx = ctx;\n  this.game = new Game();\n}\n\nGameView.prototype.start = function (){\n  setInterval(() => {\n    this.game.step();\n    this.game.draw(this.ctx); \n  }, 20); \n}\n\nmodule.exports = GameView; \n\n//# sourceURL=webpack:///./src/gameView.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"webpack is working\");\nconst MovingObject = __webpack_require__(/*! ./movingObject.js */ \"./src/movingObject.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst GameView = __webpack_require__(/*! ./gameView.js */ \"./src/gameView.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\n//waits for the document model to be loaded \n//doc model is javascript modeling the html\n//dom refers to model \n//window.documnet or document \n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  const canvas = document.getElementById(\"game-canvas\");\n  window.ctx = canvas.getContext(\"2d\"); \n}); \n\n//if you wanna see methods in window use window.\nwindow.MovingObject = MovingObject; \nwindow.Asteroid = Asteroid; \nwindow.GameView = GameView; \nwindow.Game = Game;\n\nwindow.mo = new MovingObject({\n  pos: [30, 30],\n  vel: [10, 10],\n  radius: 5,\n  color: \"#00FF00\"\n});\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/movingObject.js":
/*!*****************************!*\
  !*** ./src/movingObject.js ***!
  \*****************************/
/***/ ((module) => {

eval("function MovingObject(options){\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\nMovingObject.prototype.draw = function (ctx){\n  //draw circle of appriorte raduis centered at position \n  ctx.beginPath(); \n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);\n  ctx.stroke();\n  ctx.fillStyle = \"brown\"; \n  ctx.fill(); \n}\n\n// TypeError: undefined is not an object (evaluating 'this.game.wrap')\nMovingObject.prototype.move = function () {\n  //do we need to\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  this.pos = this.game.wrap(this.pos);\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject){\n  //two circles have collieded if there distance between their center points is less than the sum of thier radii\n  return this.radius + otherObject.radius > euclidanDistance(this.pos, otherObject.pos);\n}\n\nfunction euclidanDistance(pos1, pos2){\n  return Math.sqrt((pos2[0]-pos1[0])**2 +(pos2[1]-pos1[1])**2)\n}\n\nMovingObject.prototype.collideWith = function (otherObject) {\n}\n\nmodule.exports = MovingObject; \n\n//# sourceURL=webpack:///./src/movingObject.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./movingObject */ \"./src/movingObject.js\");\nconst Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nfunction Ship(options){\n  MovingObject.call(this, {\n    radius: 10,\n    color: \"Green\",\n    pos: options.game.randPos(),\n    vel: [0,0],\n    game: options.game\n  });\n}\n\nShip.prototype.relocate = function () {\n  this.vel = [0, 0];\n  this.pos = this.game.randPos();\n}\n\nUtil.inherits(Ship, MovingObject); \n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("const Util = {\n  inherits(child, parent) {\n    function Surrogate() {}\n    Surrogate.prototype = parent.prototype;\n    child.prototype = new Surrogate();\n    child.prototype.constructor = child;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    // why do we start with a scaled vector?\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length); \n  },\n\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;