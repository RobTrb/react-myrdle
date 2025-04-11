import fs from "fs/promises";

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
          checkedGuess[i].result = "misplaced";
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
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    return `${minutes} minutes and ${seconds} seconds`;
  },
  getRandomWord: async (letters, letterRepeat) => {
    const inputFile = await fs.readFile("./words_data.json", "utf8");
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
};

console.log(serviceAdapter.wordChecker("hleli", "hello"));
console.log(serviceAdapter.formatTime(Date.now()));