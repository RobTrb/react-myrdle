import { useState, StrictMode } from "react";
import "./styles/App.css";
import logo from "./assets/logo.webp";
import MainMenu from "./components/MainMenu";
import About from "./components/About";
import NewGameSetup from "./components/NewGameSetup";

function App() {
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isNewGameSetupActive, setNewGameSetupActive] = useState(false);

  const handleAboutClick = () => {
    setIsAboutActive(true);
    setNewGameSetupActive(false);
  };

  const handleNewGameSetupClick = () => {
    setNewGameSetupActive(true);
    setIsAboutActive(false);
  };

  const handleBackToMenu = () => {
    setIsAboutActive(false);
    setNewGameSetupActive(false);
  };

  return (
    <div className="appContainer">
      <div className="appMain">
        <img src={logo} className="logo" alt="logo"></img>

        {isAboutActive ? (
          <About onBackToMenu={handleBackToMenu} />
        ) : isNewGameSetupActive ? (
          <NewGameSetup onBackToMenu={handleBackToMenu} />
        ) : (
          <MainMenu
            onAboutClick={handleAboutClick}
            onNewGameClick={handleNewGameSetupClick}
          />
        )}
      </div>
    </div>
  );
}

export default App;
