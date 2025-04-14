import "../styles/GuessInput.css";
import { useState } from "react";

function GuessInput({ setRulesModal }) {
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
        <button className="guessBtn" onClick={(ev) =>{
            ev.preventDefault
            if (text.length > 0){
                setText("")
            } else {
                setInputError("guessInputError active")
            }
        }}>Guess</button>
      </div>
      <small className={inputError}>You must type in a word</small>
    </div>
  );
}

export default GuessInput;
