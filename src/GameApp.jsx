import { useState, StrictMode } from "react";
import NewGameSetup from "./components/NewGameSetup";
import Game from "./components/Game";
import Logo from "./components/Logo";

function GameApp({ onBackToMenu }) {
  const [nrValue, setNrValue] = useState(0);
  const [letterRepeatValue, setLetterRepeatValue] = useState(false);
  const [isGameActive, setIsGameActive] = useState(false);

  const handleStartGameClick = () => {
    setIsGameActive(true);
  };

  return (
    <>
      {isGameActive ? (
        <Game
          nrValue={nrValue}
          letterRepeatValue={letterRepeatValue}
          onBackToMenu={onBackToMenu}
        />
      ) : (
        <>
          <Logo />
          <NewGameSetup
            onBackToMenu={onBackToMenu}
            onStartGame={handleStartGameClick}
            nrValue={nrValue}
            setNrValue={setNrValue}
            letterRepeatValue={letterRepeatValue}
            setLetterRepeatValue={setLetterRepeatValue}
          />
        </>
      )}
    </>
  );
}

export default GameApp;
