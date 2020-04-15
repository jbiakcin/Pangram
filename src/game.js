// var checkWord = require('check-word'),
//   words = checkWord('en');

const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const VOWELS = ["A", "E", "I", "O", "U"]
const CONSONENTS = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];

function Game (ctx) {
  this.reqLetters = [];
  this.vowel = [];
  this.optLetters = [];
  this.currentWord = [];
  this.correctWords = [];
  this.score = 0;

  this.addReqLetters();
  this.addVowel();
  this.addOptLetters();
}

//assign letters to the game
Game.prototype.addReqLetters = function addReqLetters() {
  this.reqLetters.push(CONSONENTS[Math.floor(Math.random() * 21)]);
};

Game.prototype.addVowel = function addReqLetters() {
  this.optLetters.push(VOWELS[Math.floor(Math.random() * 5)]);
};

Game.prototype.addOptLetters = function addOptLetters() {
  for (let i = 0; i < 6; i++) {
    const randLetter = LETTERS[Math.floor(Math.random() * 26)];
    if (!this.optLetters.includes(randLetter) && !this.reqLetters.includes(randLetter)) {
    this.optLetters.push(randLetter);
    }
  };
};


//display game on board with all the info in the current game
Game.prototype.populate = function populate() {
  document.getElementById("required-letter").innerText = this.reqLetters[0];
  document.getElementById("first-letter").innerText = this.optLetters[0];
  document.getElementById("second-letter").innerText = this.optLetters[1];
  document.getElementById("third-letter").innerText = this.optLetters[2];
  document.getElementById("fourth-letter").innerText = this.optLetters[3];
  document.getElementById("fifth-letter").innerText = this.optLetters[4];
  document.getElementById("sixth-letter").innerText = this.optLetters[5];
  document.getElementById("score").innerText=this.score;
  document.getElementById("current-word").innerText=this.currentWord.join("");
  document.getElementById("correct-words").innerText=this.correctWords;
}

Game.prototype.playGame = function playGame() {
  const letters = document.getElementsByClassName("choose")
  const game = this;
  let currentWord = game.currentWord;
  const optLetters = game.optLetters;
  
  for (let i = 0; i < 7; i++) {
    letters[i].onclick = function makeWord() {
      // debugger;
      game.currentWord.push(letters[i].innerText);
      document.getElementById("current-word").innerText = currentWord.join("");
    }
  };

  //shuffle letters on the board
  document.getElementById("shuffle-btn").onclick = function shuffle() {
    console.log("optLetters", optLetters);
    optLetters.sort(() => Math.random() -0.5);
    game.populate();
  };

  //start a new game
  document.getElementById("new-game-btn").onclick = function newGame() {
    location.reload();
  };

  //submit the correct word into the "correct words" list
  document.getElementById("submit-btn").onclick = function submitWord() {
    game.correctWords.push(currentWord.join(""));
    game.correctWords.sort();
    // console.log("currentWord-before", currentWord)
    game.score += currentWord.length;
    currentWord = [];
    game.populate();
    // console.log("currentWord-after", currentWord)
  }

}

module.exports = Game;