import { useState } from "react";
import "./styles/App.css";
import Logo from "./components/Logo.jsx";
import MainMenu from "./components/MainMenu.jsx";
import About from "./components/About.jsx";
import GameApp from "./GameApp.jsx";
import Highscore from "./components/Highscore.jsx";

function App() {
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isGameAppActive, setIsGameActive] = useState(false);
  const [isHighscoreActive, setIsHighscoreActive] = useState(false);

  const handleAboutClick = () => {
    setIsAboutActive(true);
  };

  const handleNewGameClick = () => {
    setIsGameActive(true);
  };

  const handleHighscoreClick = () => {
    setIsHighscoreActive(true);
  };

  const handleBackToMenu = () => {
    setIsAboutActive(false);
    setIsGameActive(false);
    setIsHighscoreActive(false);
  };

  return (
    <div className="appContainer">
      <div className="appMain">
        {isAboutActive ? (
          <>
            <Logo />
            <About onBackToMenu={handleBackToMenu} />
          </>
        ) : isGameAppActive ? (
          <>
            <GameApp onBackToMenu={handleBackToMenu} />
          </>
        ) : isHighscoreActive ? (
          <>
            <Highscore onBackToMenu={handleBackToMenu} />
          </>
        ) : (
          <>
            <Logo />
            <MainMenu
              onAboutClick={handleAboutClick}
              onNewGameClick={handleNewGameClick}
              onHighscoreClick={handleHighscoreClick}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
