console.log("webpack is working")
const MovingObject = require('./movingObject.js');


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


