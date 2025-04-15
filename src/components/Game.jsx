import { useEffect, useState } from "react";
import "../styles/Game.css";
import QuitGame from "./QuitGame";
import Logo from "./Logo";
import Rules from "./Rules";
import GuessInput from "./GuessInput";
import LetterPresenter from "./LetterPresenter";
import WonGame from "./WonGame"

function Game({ nrValue, letterRepeatValue, onBackToMenu, gameId }) {
  const [rulesModal, setRulesModal] = useState("rulesModalContainer");
  const [checkedGuess, setCheckedGuess] = useState([]);
  const [currentGame, setCurrentGame] = useState(null);
  const [isWonGameActive, setIsWonGameActive] = useState(false);

  const handleWonGameClick =() =>{
    setIsWonGameActive(true);
  };

  useEffect(()=>{
    if(currentGame?.won === true){
      handleWonGameClick();
    }
  }, [currentGame])

  return (
    <div className="gameContainer">
      {isWonGameActive ? (
        <WonGame currentGame={currentGame} letterRepeatValue={letterRepeatValue} />
      ) : (
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
            setRulesModal={setRulesModal}
            setCheckedGuess={setCheckedGuess}
            gameId={gameId}
            setCurrentGame={setCurrentGame}
            currentGame={currentGame}
            handleWonGameClick={handleWonGameClick}
            nrValue={nrValue}
          />
          <QuitGame onBackToMenu={onBackToMenu} />
        </>
      )}
    </div>
  );
}

export default Game;
