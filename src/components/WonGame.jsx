import "../styles/WonGame.css";
import { useState, useEffect } from "react";
import StatsPresenter from "./StatsPresenter.jsx";
import HighScoreSubmit from "./HighScoreSubmit.jsx";

function WonGame({ currentGame, letterRepeatValue, nrValue, onBackToMenu }) {
  return (
    <div className="wonGameContainer">
      <h1>Congratulations!</h1>
      <>
        <StatsPresenter
          currentGame={currentGame}
          letterRepeatValue={letterRepeatValue}
        />
        <HighScoreSubmit
          currentGame={currentGame}
          letterRepeatValue={letterRepeatValue}
          nrValue={nrValue}
          onBackToMenu={onBackToMenu}
        />
      </>
    </div>
  );
}

export default WonGame;
