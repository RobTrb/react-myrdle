import "../styles/StatsPresenter.css";
import { useState, useEffect } from "react";

function StatsPresenter({ currentGame, letterRepeatValue }) {
  const [letterRepeatText, setLetterRepeatText] = useState("");

  useEffect(() => {
    if (letterRepeatValue) {
      setLetterRepeatText("You played with repeating letters turned on");
    } else {
      setLetterRepeatText("You played with repeating letters turned off");
    }
  }, [letterRepeatValue]);

  return (
    <>
      <div className="statsPresenter">
        <h2>You have won!</h2>
        <p>The word you had was: {currentGame.correctWord.toUpperCase()}</p>
        <p>It took you: {currentGame.nrOfGuesses} attempts</p>
        <p>Completion time was:</p>
        <p>
          {currentGame.completionTime.minutes} minutes and{"  "}
          {currentGame.completionTime.seconds} seconds
        </p>
        <p>{letterRepeatText}</p>
      </div>
    </>
  );
}

export default StatsPresenter;
