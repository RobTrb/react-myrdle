import { useState } from "react";
import "./styles/App.css";
import Logo from "./components/Logo";
import MainMenu from "./components/MainMenu";
import About from "./components/About";
import GameApp from "./GameApp";

function App() {
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isGameAppActive, setIsGameActive] = useState(false);

  const handleAboutClick = () => {
    setIsAboutActive(true);
  };

  const handleNewGameClick = () => {
    setIsGameActive(true);
  };

  const handleBackToMenu = () => {
    setIsAboutActive(false);
    setIsGameActive(false);
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
        ) : (
          <>
            <Logo />
            <MainMenu
              onAboutClick={handleAboutClick}
              onNewGameClick={handleNewGameClick}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
