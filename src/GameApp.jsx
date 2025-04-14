import { useState, StrictMode } from "react";
import NewGameSetup from "./components/NewGameSetup";
import Game from "./components/Game";
import Logo from "./components/Logo";

function GameApp({ onBackToMenu }) {
  const [nrValue, setNrValue] = useState(0);
  const [letterRepeatValue, setLetterRepeatValue] = useState(false);
  const [isGameActive, setIsGameActive] = useState(false);
  const [gameId, setGameId] = useState(null);

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
          gameId={gameId}
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
            setGameId={setGameId}
          />
        </>
      )}
    </>
  );
}

export default GameApp;
