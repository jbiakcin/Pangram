const wordList = require('./allWords.js').words;
const letters = require('./gameLetters');
const gameLetters = letters[Math.floor(Math.random() * letters.length)];

function Game () {
  this.reqLetters = gameLetters.reqLetters;
  this.optLetters = gameLetters.optLetters;
  this.currentWord = [];
  this.correctWords = [];
  this.score = 0;
  this.level = "n00b";
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
  document.getElementById("score").innerText = this.score;
  document.getElementById("level").innerText = this.level;
  document.getElementById("num-correct-words").innerText = this.correctWords.length;
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

    const animations = [
      'animated',
      'zoomInUp'
    ];
    li.classList.add(...animations);
    li.appendChild(document.createTextNode(this.correctWords[i]));
    ul.appendChild(li);

    words += `<li class="list-items">` + this.correctWords[i] + `</li>`;
  }
}

Game.prototype.updateScore = function updateScore() {
  if (this.currentWord.length === 4) {
    this.score += 3;
  } else if (this.currentWord.length === 5) {
    this.score += 4;
  } else if (this.currentWord.length === 6) {
    this.score += 7;
  } else if (this.currentWord.length === 7) {
    this.score += 10;
  } else {
    this.socre += 15;
  }
}

Game.prototype.updateLevel = function updateLevel() {
  if (this.score < 10) {
    this.level = "n00b";
  } else if (this.score >= 10 && this.score < 20) {
    this.level = "Solid";
  } else if (this.score >= 20 && this.score < 30) {
    this.level = "On Fire";
  } else if (this.score >= 30 && this.score < 40) {
    this.level = "Killer";
  } else if (this.score >= 40 && this.score < 50) {
    this.level = "Mad Skillz";
  } else {
    this.level = "Einstein";
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

  //mute game
  document.getElementById("mute-button").onclick = function muteAudio () {
    // debugger;
    // if (this.innerText === "<i class='fas fa-volume-mute'></i>") {
    //   this.innerText = "<i class='fas fa-volume-off'></i>";
    // } else {
    //   this.innerText = "<i class='fas fa-volume-mute'></i>";
    // }
    if (this.innerText === "Mute") {
      this.innerText = "Unmute";
    } else {
      this.innerText = "Mute";
    }
    // if (game.muteStatus = '<i class="fas fa-volume-mute"></i>') {
    //   game.muteStatus = '<i class="fas fa-volume-off"></i>';
    // } else {
    //   game.muteStatus = '<i class="fas fa-volume-mute"></i>'
    // }
    const audioList = document.getElementsByClassName("audio");
    for (let i = 0; i < audioList.length; i++) {
      let audioTag = audioList[i];
      if (audioTag.getAttribute("muted") === "false") {
        audioTag.setAttribute("muted", "true")
      } else {
        audioTag.setAttribute("muted", "false")
      }
    }
  }

  //play particular sounds
  function playSound(url) {
    new Audio(url).play();
  }

  //shuffle letters on the board
  document.getElementById("shuffle-btn").onclick = function shuffle() {
    optLetters.sort(() => Math.random() -0.5);
    if (this.getAttribute("muted") === "true"){
    playSound('sounds/shuffle.mp3');
    }
    game.populate();
  };

  //delete a letter
  document.getElementById("delete-btn").onclick = function deleteLetter(){
    game.currentWord.pop();
    game.populate();
  }

  //start a new game
  document.getElementById("new-game-btn").onclick = function newGame() {
    if (window.confirm("Are you sure you want to start a new game?")) {
    location.reload();
    }
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
      swal({
        title: "Missing required letter.",
        icon: "error",
        buttons: false,
        dangerMode: true,
        timer: 1000
      })
    } else if (game.currentWord.length < 4) {
      swal({
        title: "Too Short",
        icon: "error",
        buttons: false,
        dangerMode: true,
        timer: 1000
      })
    } else if (!wordList.includes(game.currentWord.join("").toLowerCase())) {
      swal({
        title: "Not a Word!",
        icon: "error",
        buttons: false,
        dangerMode: true,
        timer: 1000
      })
    } else if (game.correctWords.includes(game.currentWord.join(""))) {
      swal({
        title: "Already Found!",
        icon: "warning",
        buttons: false,
        dangerMode: true,
        timer: 1000
      })
    } else {
      const uniqueArray = [...new Set(game.currentWord)]
      if (uniqueArray.length === 7) {
      swal({
        title: "Pangram!!!!!",
        icon: "success",
        type: "info",
        timer: 1000
      });
      game.score += 5;
      }
      game.correctWords.push(game.currentWord.join(""));
      game.correctWords.sort();
      game.updateScore();
      game.updateLevel();
      game.updateCorrectWords();
      game.currentWord = [];
    };
    game.populate();
  }

}

module.exports = Game;