import { useState } from "react";
import "../styles/Game.css";
import QuitGame from "./QuitGame";
import Logo from "./Logo";
import Rules from "./Rules";
import GuessInput from "./GuessInput";
import LetterPresenter from "./LetterPresenter";

function Game({ nrValue, letterRepeatValue, onBackToMenu }) {
  const [rulesModal, setRulesModal] = useState("rulesModalContainer");

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
        <LetterPresenter nrValue={nrValue} />
        <GuessInput rulesModal={rulesModal} setRulesModal={setRulesModal} />
        <QuitGame onBackToMenu={onBackToMenu} />
      </>
    </div>
  );
}

export default Game;
