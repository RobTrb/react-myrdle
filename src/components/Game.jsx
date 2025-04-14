import { useEffect, useState } from "react";
import "../styles/Game.css";
import QuitGame from "./QuitGame";
import Logo from "./Logo";
import Rules from "./Rules";
import GuessInput from "./GuessInput";
import LetterPresenter from "./LetterPresenter";

function Game({ nrValue, letterRepeatValue, onBackToMenu }) {
  const [rulesModal, setRulesModal] = useState("rulesModalContainer");
  const [checkedGuess, setCheckedGuess] = useState([]);  
  
  /*
  useEffect(()=>{
    const startGame = async () =>{
      const res = await fetch("/api/games",{
        method: "post"
      })
      const gameData = await res.json();
      setGameId(gameData.id);      
    }

    startGame();
  }, [])
  */

  return (
    <div className="gameContainer">
      <>
        <Logo />
        <Rules
          nrValue={nrValue}
          letterRepeatValue={letterRepeatValue}
          rulesModal={rulesModal}
          setRulesModal={setRulesModal}
        />
        <LetterPresenter
          nrValue={nrValue}
          checkedGuess={checkedGuess}
          setCheckedGuess={setCheckedGuess}
        />
        <GuessInput
          rulesModal={rulesModal}
          setRulesModal={setRulesModal}          
          setCheckedGuess={setCheckedGuess}
        />
        <QuitGame onBackToMenu={onBackToMenu} />
      </>
    </div>
  );
}

export default Game;
