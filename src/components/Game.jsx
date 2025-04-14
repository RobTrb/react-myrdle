import { useEffect, useState } from "react";
import "../styles/Game.css";
import QuitGame from "./QuitGame";
import Logo from "./Logo";
import Rules from "./Rules";
import GuessInput from "./GuessInput";
import LetterPresenter from "./LetterPresenter";

function Game({ nrValue, letterRepeatValue, onBackToMenu, gameId }) {
  const [rulesModal, setRulesModal] = useState("rulesModalContainer");
  const [checkedGuess, setCheckedGuess] = useState([]);
  const [currentGame, setCurrentGame] = useState(null);
  const [wonGame, setWonGame] = useState(false); 

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
          setRulesModal={setRulesModal}          
          setCheckedGuess={setCheckedGuess}
          gameId={gameId}
          setCurrentGame={setCurrentGame}
          currentGame={currentGame}         
        />
        <QuitGame onBackToMenu={onBackToMenu} />
      </>
    </div>
  );
}

export default Game;
