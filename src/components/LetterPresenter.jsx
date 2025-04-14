import "../styles/LetterPresenter.css";
import { useState, useEffect } from "react";

function LetterPresenter({ nrValue, checkedGuess, setCheckedGuess }) {
  useEffect(() => {
    const newCheckedGuess = [];
    for (let i = 0; i < nrValue; i++) {
      newCheckedGuess.push({ letter: "-", result: "blank" });
    }
    setCheckedGuess(newCheckedGuess);
  }, [nrValue]);

  return (
    <div className="letterPresenterContainer">
      {checkedGuess.map((guess, index) => {
        let className = guess.result;
        return (
          <span key={index} className="letterContainer">
            <h1 className={"letter " + className}>{guess.letter}</h1>
          </span>
        );
      })}

      {console.log(nrValue)}
      {console.log(checkedGuess)}
    </div>
  );
}

export default LetterPresenter;
