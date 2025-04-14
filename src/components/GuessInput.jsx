import "../styles/GuessInput.css";
import { useState } from "react";

function GuessInput({
  setRulesModal,
  gameId,
  setCheckedGuess,
  setCurrentGame,
  currentGame,
}) {
  const [text, setText] = useState("");
  const [inputError, setInputError] = useState("guessInputError");

  return (
    <div className="guessModuleContainer">
      <div className="guessInputContainer">
        <button
          className="rulesBtn"
          onClick={(ev) => {
            ev.preventDefault;
            setRulesModal("rulesModalContainer active");
          }}
        >
          Rules
        </button>
        <input
          className="guessInputField"
          type="text"
          value={text}
          onChange={(ev) => {
            if (inputError) {
              setInputError("guessInputError");
            }
            setText(ev.target.value);
          }}
        ></input>
        <button
          className="guessBtn"
          onClick={async (ev) => {
            ev.preventDefault;
            if (text.length > 0) {
              const lowercaseGuess = text.toLowerCase();
              const response = await fetch("api/games", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  nrValue: 0,
                  letterRepeatValue: 0,
                  guess: lowercaseGuess,
                  id: gameId,
                }),
              });
              const data = await response.json();
              setCurrentGame(data.game);
              setCheckedGuess(data.game.checkedGuess);
              setText("");
            } else {
              setInputError("guessInputError active");
            }
          }}
        >
          Guess
        </button>
      </div>
      <small className={inputError}>You must type in a word</small>
    </div>
  );
}

export default GuessInput;
