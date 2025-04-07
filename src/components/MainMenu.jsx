export default function MainMenu({onAboutClick, onNewGameClick}) { 

  return (
    <div className="mainMenuContainer" alt="Main menu">
      <button onClick={onNewGameClick}>New Game</button>
      <button>Highscore</button>
      <button onClick={onAboutClick}>About</button>
    </div>
  );
}
