import "../styles/HighScoreSubmit.css";
import { useState } from "react";

function HighScoreSubmit({
  currentGame,
  letterRepeatValue,
  nrValue,
  onBackToMenu,
}) {
  const [playerName, setPlayerName] = useState("");
  const [placeHolderText, setPlaceHolderText] = useState("Enter your name...");
  const [inputFieldClass, setInputFieldClass] = useState("nameInput");
  const [submitSuccessModalClass, setSuccessModalClass] = useState(
    "submitSuccessModalContainer"
  );
  return (
    <>
      <div className="submitContainer">
        <h3>Highscore</h3>
        <form
          onSubmit={async (ev) => {
            ev.preventDefault();
            if (playerName.length >= 1) {
              console.log("form submitted");
              const response = await fetch("api/highscores", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  gameID: currentGame.id,
                  playerName: playerName,
                  word: currentGame.correctWord,
                  nrOfLetters: parseInt(nrValue),
                  repeatingLetters: letterRepeatValue,
                  attempts: parseInt(currentGame.nrOfGuesses),
                  time: `${String(currentGame.completionTime.minutes).padStart(
                    2,
                    "0"
                  )} minutes and ${String(
                    currentGame.completionTime.seconds
                  ).padStart(2, "0")} seconds`,
                }),
              });
              const data = await response.json();
              console.log(data.message);
              setPlayerName("");
              setSuccessModalClass("submitSuccessModalContainer active");
            } else {
              setPlaceHolderText("YOU NEED TO TYPE IN A NAME");
              setInputFieldClass("nameInput error");
            }
          }}
        >
          <input
            type="text"
            value={playerName}
            className={inputFieldClass}
            onChange={(ev) => {
              setPlayerName(ev.target.value);
              setPlaceHolderText("Enter your name...");
              setInputFieldClass("nameInput");
            }}
            placeholder={placeHolderText}
          />
          <p>Click "Submit" to submit name and stats to the highscore list.</p>
          <p>Click "Quit" to quit to main menu without submitting highscore.</p>
          <div className="buttonContainer">
            <button
              type="button"
              onClick={(ev) => {
                ev.preventDefault();
                onBackToMenu();
              }}
            >
              Quit
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className={submitSuccessModalClass}>
        <div className="submitSuccessModal">
          <h1>Success!</h1>
          <h2>Highscore submitted!</h2>
          <button
            type="button"
            onClick={(ev) => {
              ev.preventDefault();
              onBackToMenu();
            }}
          >
            Quit To Menu
          </button>
        </div>
      </div>
    </>
  );
}

export default HighScoreSubmit;
