
function GameView(game, ctx) {
  this.game = game
  this.ctx = ctx
}

GameView.prototype.start = function () {
  this.game.draw(this.ctx);
}

module.exports = GameView;