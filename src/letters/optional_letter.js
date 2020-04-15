const Util = require('../util');
const Letter = require('./letter');

// const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// const randLetter = LETTERS[Math.floor(Math.random() * 26)];

// const DEFAULTS = {
//   RADIUS: 25,
//   COLOR: "blue",
//   FILLCOLOR: "purple",
//   FONT: "16px Georgia"
// };

function OptionalLetter(obj, game) {
  this.letter = obj.letter;
  // this.radius = DEFAULTS.RADIUS;
  // this.color = DEFAULTS.COLOR;
  // this.fillColor = DEFAULTS.FILLCOLOR;
  // this.font = DEFAULTS.FONT;
  // this.pos = obj.pos;
  this.game = game;
};

Util.inherits(OptionalLetter, Letter);

module.exports = OptionalLetter;