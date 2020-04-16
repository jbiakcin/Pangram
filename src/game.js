const wordList = require('./allWords.js').words;
const letters = require('./gameLetters');
const gameLetters = letters[Math.floor(Math.random() * letters.length)];

function Game () {
  this.reqLetters = gameLetters.reqLetters;
  this.optLetters = gameLetters.optLetters;
  this.currentWord = [];
  this.correctWords = [];
  this.score = 0;
}

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
}

Game.prototype.updateCorrectWords = function () {
  let ul = document.getElementById("correct-words");
  let lis = ul.getElementsByTagName("li");

  while (lis.length > 0) {
    ul.removeChild(lis[0]);
  }
  
  for (let i = 0; i < this.correctWords.length; i++) {
    let words;
    let li = document.createElement("li");

    li.appendChild(document.createTextNode(this.correctWords[i]));
    ul.appendChild(li);

    words += `<li class="list-items">` + this.correctWords[i] + `</li>`;
  }
}

//play game
Game.prototype.playGame = function playGame() {
  const letters = document.getElementsByClassName("choose")
  const game = this;
  const optLetters = game.optLetters;
  const reqLetters = game.reqLetters;
  const rulesModal = document.getElementById("rules-modal");
  
  for (let i = 0; i < 7; i++) {
    letters[i].onclick = function makeWord() {
      game.currentWord.push(letters[i].innerText);
      document.getElementById("current-word").innerText = game.currentWord.join("");
    }
  };

  //shuffle letters on the board
  document.getElementById("shuffle-btn").onclick = function shuffle() {
    optLetters.sort(() => Math.random() -0.5);
    game.populate();
  };

  //delete a letter
  document.getElementById("delete-btn").onclick = function deleteLetter(){
    game.currentWord.pop();
    game.populate();
  }

  //start a new game
  document.getElementById("new-game-btn").onclick = function newGame() {
    location.reload();
  };

  //rules modal
  document.getElementById("rules-button").onclick = function toggleRulesModal() {
    if (rulesModal.className === "modal") {
      rulesModal.className = "modal hidden";
    } else {
      rulesModal.className = "modal"
    }
  };

  document.getElementById("rules-close-button").onclick = function toggleRulesModal() {
    if (rulesModal.className === "modal") {
      rulesModal.className = "modal hidden";
    } else {
      rulesModal.className = "modal"
    }
  };

  //submit the correct word into the "correct words" list
  document.getElementById("submit-btn").onclick = function submitWord() {
    if (!game.currentWord.includes(reqLetters[0])) {
      window.alert("Must include the required letter")
    } else if (game.currentWord.length < 4) {
      window.alert("Must be at least 4 letters")
    } else if (!wordList.includes(game.currentWord.join("").toLowerCase())) {
      window.alert("Not a valid word")
    } else {
      game.correctWords.push(game.currentWord.join(""));
      game.correctWords.sort();
      game.score += game.currentWord.length;
      game.updateCorrectWords();
      game.currentWord = [];
    };
    game.populate();
  }

}

module.exports = Game;