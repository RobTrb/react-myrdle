import { useState } from "react";
import "../styles/Game.css";

function Game({ nrValue, letterRepeatValue, onBackToMenu }) {
  const [quitModal, setQuitModal] = useState("quitModalContainer");
  return (
    <div className="gameContainer">
      <button
        onClick={(ev) => {
          ev.preventDefault();
          setQuitModal("quitModalContainer active");
          console.log(nrValue, letterRepeatValue);
        }}
      >
        Quit Game
      </button>
      <div className={quitModal}>
        <div className="quitModal">
          <h3>Are you sure you want to quit?</h3>
          <div className="modalButtons">
            <button
              onClick={(ev) => {
                ev.preventDefault();
                onBackToMenu();
              }}
            >
              Yes
            </button>
            <button
              onClick={(ev) => {
                ev.preventDefault();
                setQuitModal("quitModalContainer");
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;