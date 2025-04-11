import { useState } from "react";
import "../styles/Game.css";
import QuitGame from "./QuitGame"
import Logo from "./Logo"
import Rules from "./Rules"
import GuessInput from "./GuessInput"

function Game({ nrValue, letterRepeatValue, onBackToMenu }) {
    
  return (
    <div className="gameContainer">
      <>      
      <Logo />
      <Rules nrValue={nrValue} letterRepeatValue={letterRepeatValue} />
      <GuessInput />
      <QuitGame onBackToMenu={onBackToMenu}/>
      </>            
    </div>
  );
}

export default Game;