import "../styles/NewGameSetup.css";
import { useState } from "react";

export default function NewGameSetup({ onBackToMenu }) {
  const [error, setError] = useState(false);

  let nrClass = "nrError";
  if (error) {
    nrClass += "nrErrorVisible";
  }

  return (
    //Glöm ej: avsluta påbörjad felhantering för nrInput
    <div className="newGameSetupContainer" alt="Setting up new game">
      <form className="newGameSetup">
        <h1>New Game</h1>
        <h4>How many letters in the word:</h4>
        <small className={nrClass}>Must contain a number</small>
        <input type="number" className="nrInput"></input>
        <h4>Can contain same letter in more places:</h4>
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider round"></span>
        </label>
        <button className="startGame">Start Game</button>
        <button onClick={onBackToMenu}>Back to main menu</button>
      </form>
    </div>
  );
}
