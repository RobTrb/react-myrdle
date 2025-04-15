import "../styles/StatsPresenter.css";
import { useState, useEffect } from "react";
import StatsPresenter from "./StatsPresenter.jsx";
import HighScoreSubmit from "./HighScoreSubmit.jsx";

function WonGame({ currentGame, letterRepeatValue }) {
  console.log(currentGame);

  return (
    <div className="wonGameContainer">
      <h1>Congratulations!</h1>
      <>  
      <StatsPresenter currentGame={currentGame} letterRepeatValue={letterRepeatValue}/>
      <HighScoreSubmit />
      </>      
    </div>
  );
}

export default WonGame;
