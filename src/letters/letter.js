function Letter(letter, game){
  this.letter = letter
  // this.pos = pos;
  // this.radius = radius;
  // this.color = color;
  // this.fillColor = fillColor;
  // this.font = font;
  this.game = game;
}

// Letter.prototype.draw = function draw(ctx) {
//   debugger;
//   ctx.fillStyle = this.fillColor;
//   ctx.font = this.font;
//   ctx.beginPath();
//   ctx.arc (
//     this.pos[0],
//     this.pos[1],
//     this.radius,
//     0,
//     2 * Math.PI
//   );
//   ctx.fill();
//   ctx.beginPath();
//   ctx.fillStyle = this.color;
//   ctx.fillText(this.letter, this.pos[0]-10, this.pos[1]);
//   ctx.fill();
// };

module.exports = Letter;