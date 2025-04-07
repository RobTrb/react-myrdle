import { useState, StrictMode } from "react";
import "./App.css";
import logo from "./assets/logo.webp";
import MainMenu from "./components/MainMenu";
import About from "./components/About";

function App() {
  const [isAboutActive, setIsAboutActive] = useState(false);

  const handleAboutClick = () => {
    setIsAboutActive(true);
  };

  const handleBackToMenu = () => {
    setIsAboutActive(false);
  };

  return (
    <div className="appContainer">
      
      <div className="appMain">
      <img src={logo} className="logo" alt="logo"></img>
      
        {isAboutActive ? (
          <About onBackToMenu={handleBackToMenu} />
        ) : (
          <MainMenu onAboutClick={handleAboutClick} />
        )}
      </div>
    </div>
  );
}

export default App;
