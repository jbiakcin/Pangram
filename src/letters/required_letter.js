const Util = require('../util');
const Letter = require('./letter');

const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const randLetter = LETTERS[Math.floor(Math.random() * 26)];

// const DEFAULTS = { 
//   RADIUS: 30, 
//   COLOR: "teal", 
//   FILLCOLOR: "red",
//   FONT: "20px Georgia",
//   POS: [250, 250]
// };

function RequiredLetter (game) {
  this.letter = randLetter;
  // this.radius = DEFAULTS.RADIUS;
  // this.color = DEFAULTS.COLOR;
  // this.fillColor = DEFAULTS.FILLCOLOR;
  // this.font = DEFAULTS.FONT;
  // this.pos = DEFAULTS.POS;
  this.game = game;
};

Util.inherits(RequiredLetter, Letter);

module.exports = RequiredLetter;