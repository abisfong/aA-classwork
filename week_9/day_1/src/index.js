console.log("webpack is working")
const MovingObject = require('./movingObject.js');
const Asteroid = require('./asteroid.js');
const GameView = require('./gameView.js');
const Game = require('./game.js');


//waits for the document model to be loaded 
//doc model is javascript modeling the html
//dom refers to model 
//window.documnet or document 

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("game-canvas");
  window.ctx = canvas.getContext("2d"); 
}); 

//if you wanna see methods in window use window.
window.MovingObject = MovingObject; 
window.Asteroid = Asteroid; 
window.GameView = GameView; 
window.Game = Game;

window.mo = new MovingObject({
  pos: [30, 30],
  vel: [10, 10],
  radius: 5,
  color: "#00FF00"
});


