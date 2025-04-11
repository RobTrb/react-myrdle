import { useState } from "react";
import "../styles/QuitGame.css";

function QuitGame({ onBackToMenu }) {
  const [quitModal, setQuitModal] = useState("quitModalContainer");
  return (
    <>
      <button
        className="quitBtn"
        onClick={(ev) => {
          ev.preventDefault();
          setQuitModal("quitModalContainer active");
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
    </>
  );
}

export default QuitGame;
