import { useState, StrictMode } from "react";
import "./styles/App.css";
import logo from "./assets/logo.webp";
import MainMenu from "./components/MainMenu";
import About from "./components/About";
import Game from "./components/Game"

function App() {
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isGameActive, setIsGameActive] = useState(false);  

  const handleAboutClick = () => {
    setIsAboutActive(true);    
  };
  
  const handleNewGameClick = () => {
    setIsGameActive(true)
  };

  const handleBackToMenu = () => {
    setIsAboutActive(false)    
  };

  return (
    <div className="appContainer">
      <div className="appMain">
        <img src={logo} className="logo" alt="logo"></img>

        {isAboutActive ? (
          <About onBackToMenu={handleBackToMenu} />
        ) : isGameActive ? (
          <Game />
        ) : (
          <MainMenu
            onAboutClick={handleAboutClick}
            onNewGameClick={handleNewGameClick}            
          />
        )}
      </div>
    </div>
  );
}

export default App;
