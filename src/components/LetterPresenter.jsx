import "../styles/LetterPresenter.css";
import { useEffect } from "react";

function LetterPresenter({ nrValue, checkedGuess, setCheckedGuess }) {
  useEffect(() => {
    if (checkedGuess.length === 0) {
      const newCheckedGuess = [];
      for (let i = 0; i < nrValue; i++) {
        newCheckedGuess.push({ letter: "-", result: "blank" });
      }

      setCheckedGuess(newCheckedGuess);
    }
  }, [nrValue, checkedGuess]);

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
    </div>
  );
}

export default LetterPresenter;
