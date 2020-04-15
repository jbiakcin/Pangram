const Game = require('./game');
let canvasEl;
window.addEventListener("DOMContentLoaded", function () {
  canvasEl = document.getElementById("game-canvas")
  const game = new Game();
  game.populate();
  game.playGame();
  
  window.game = game;
});