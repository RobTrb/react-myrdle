import fs from "fs/promises";
import * as uuid from "uuid";

const GAMES = []

export const serviceAdapter = {
  wordChecker: (guess, answer) => {
    guess = guess.toUpperCase();
    answer = answer.toUpperCase();

    //prepairing guess to be checked
    let checkedGuess = guess
      .split("")
      .map((letter) => ({ letter: letter, result: "blank" }));

    //First step: Mark correct letters
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === answer[i]) {
        checkedGuess[i].result = "correct";
      }
    }

    //Second step: Mark misplaced letters
    for (let i = 0; i < guess.length; i++) {
      //excluding letters that are already marked as correct and now checks if letter exist anywhere else
      if (checkedGuess[i].result !== "correct") {
        let misplacedLetter = answer.indexOf(guess[i]);
        if (
          misplacedLetter !== -1 &&
          checkedGuess[misplacedLetter].result !== "correct"
        ) {
          checkedGuess[i].result = "missplaced";
        }
      }
    }

    //Third step: Mark remaining letters as incorrect
    for (let i = 0; i < guess.length; i++) {
      if (checkedGuess[i].result === "blank") {
        checkedGuess[i].result = "incorrect";
      }
    }

    return { checkedGuess };
  },
  formatTime: (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return { minutes, seconds };
  },
  getRandomWord: async (letters, letterRepeat) => {
    const inputFile = await fs.readFile("./server/words_data.json", "utf8");
    const data = JSON.parse(inputFile);

    let filteredWords = data.words.filter((word) => {
      if (letterRepeat === false) {
        return word.letterRepeat === false && word.letters === letters;
      } else {
        return word.letters === letters;
      }
    });

    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    const randomWord = filteredWords[randomIndex].word;

    return randomWord;
  },
  gameHandler: async (nrValue, letterRepeatValue, id, guess) => {
    if (nrValue > 0) {
      const randomWord = await serviceAdapter.getRandomWord(
        nrValue,
        letterRepeatValue
      );
      const newGame = {
        correctWord: randomWord,
        guesses: [],
        id: uuid.v4(),
        startTime: new Date(),
      };
      GAMES.push(newGame);
      console.log(newGame.correctWord)
      return newGame.id;
    } else {
      const game = GAMES.find((savedGame) => savedGame.id == id);
      if (!game) {
        return null;
      }
      game.guesses.push(guess);
      if (guess === game.correctWord) {
        game.endTime = new Date();
        game.checkedGuess = serviceAdapter.wordChecker(
          guess,
          game.correctWord
        ).checkedGuess;
        game.completionTime = serviceAdapter.formatTime(
          game.endTime - game.startTime
        );
        game.nrOfGuesses = game.guesses.length;
        game.won = true;
        return game;
      } else if (guess != game.correctWord) {
        game.checkedGuess = serviceAdapter.wordChecker(
          guess,
          game.correctWord
        ).checkedGuess;
        game.nrOfGuesses = game.guesses.length;

        const redactedGame = {
          id: game.id,
          nrOfGuesses: game.nrOfGuesses,
          checkedGuess: game.checkedGuess,          
        }

        return redactedGame;
      }
    }
    console.log(game);
  },
};
