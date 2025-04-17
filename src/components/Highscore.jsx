import "../styles/Highscore.css";
import { useState } from "react";

function Highscore({ onBackToMenu }) {
  return (
    <>
      <h1>Highscores!</h1>
      <div className="highscoreListContainer">
        <iframe
          src="/api/highscore"
          width="100%"
          height="100%"
          title="Highscore List"
        ></iframe>
      </div>
      <button className="backToMenu" onClick={onBackToMenu}>
        Back to menu
      </button>
    </>
  );
}

export default Highscore;
