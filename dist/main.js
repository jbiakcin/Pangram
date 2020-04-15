/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// var checkWord = require('check-word'),\n//   words = checkWord('en');\n\nconst LETTERS = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\", \"K\", \"L\", \"M\", \"N\", \"O\", \"P\", \"Q\", \"R\", \"S\", \"T\", \"U\", \"V\", \"W\", \"X\", \"Y\", \"Z\"];\nconst VOWELS = [\"A\", \"E\", \"I\", \"O\", \"U\"]\nconst CONSONENTS = [\"B\", \"C\", \"D\", \"F\", \"G\", \"H\", \"J\", \"K\", \"L\", \"M\", \"N\", \"P\", \"Q\", \"R\", \"S\", \"T\", \"V\", \"W\", \"X\", \"Y\", \"Z\"];\n\nfunction Game (ctx) {\n  this.reqLetters = [];\n  this.vowel = [];\n  this.optLetters = [];\n  this.currentWord = [];\n  this.correctWords = [];\n  this.score = 0;\n\n  this.addReqLetters();\n  this.addVowel();\n  this.addOptLetters();\n}\n\n//assign letters to the game\nGame.prototype.addReqLetters = function addReqLetters() {\n  this.reqLetters.push(CONSONENTS[Math.floor(Math.random() * 21)]);\n};\n\nGame.prototype.addVowel = function addReqLetters() {\n  this.optLetters.push(VOWELS[Math.floor(Math.random() * 5)]);\n};\n\nGame.prototype.addOptLetters = function addOptLetters() {\n  for (let i = 0; i < 6; i++) {\n    const randLetter = LETTERS[Math.floor(Math.random() * 26)];\n    if (!this.optLetters.includes(randLetter) && !this.reqLetters.includes(randLetter)) {\n    this.optLetters.push(randLetter);\n    }\n  };\n};\n\n\n//display game on board with all the info in the current game\nGame.prototype.populate = function populate() {\n  document.getElementById(\"required-letter\").innerText = this.reqLetters[0];\n  document.getElementById(\"first-letter\").innerText = this.optLetters[0];\n  document.getElementById(\"second-letter\").innerText = this.optLetters[1];\n  document.getElementById(\"third-letter\").innerText = this.optLetters[2];\n  document.getElementById(\"fourth-letter\").innerText = this.optLetters[3];\n  document.getElementById(\"fifth-letter\").innerText = this.optLetters[4];\n  document.getElementById(\"sixth-letter\").innerText = this.optLetters[5];\n  document.getElementById(\"score\").innerText=this.score;\n  document.getElementById(\"current-word\").innerText=this.currentWord.join(\"\");\n  document.getElementById(\"correct-words\").innerText=this.correctWords;\n}\n\nGame.prototype.playGame = function playGame() {\n  const letters = document.getElementsByClassName(\"choose\")\n  const game = this;\n  let currentWord = game.currentWord;\n  const optLetters = game.optLetters;\n  \n  for (let i = 0; i < 7; i++) {\n    letters[i].onclick = function makeWord() {\n      // debugger;\n      game.currentWord.push(letters[i].innerText);\n      document.getElementById(\"current-word\").innerText = currentWord.join(\"\");\n    }\n  };\n\n  //shuffle letters on the board\n  document.getElementById(\"shuffle-btn\").onclick = function shuffle() {\n    console.log(\"optLetters\", optLetters);\n    optLetters.sort(() => Math.random() -0.5);\n    game.populate();\n  };\n\n  //start a new game\n  document.getElementById(\"new-game-btn\").onclick = function newGame() {\n    location.reload();\n  };\n\n  //submit the correct word into the \"correct words\" list\n  document.getElementById(\"submit-btn\").onclick = function submitWord() {\n    game.correctWords.push(currentWord.join(\"\"));\n    game.correctWords.sort();\n    // console.log(\"currentWord-before\", currentWord)\n    game.score += currentWord.length;\n    currentWord = [];\n    game.populate();\n    // console.log(\"currentWord-after\", currentWord)\n  }\n\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nlet canvasEl;\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  canvasEl = document.getElementById(\"game-canvas\")\n  const game = new Game();\n  game.populate();\n  game.playGame();\n  \n  window.game = game;\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });