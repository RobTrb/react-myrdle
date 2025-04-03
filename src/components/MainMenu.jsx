export default function MainMenu({onAboutClick}) { 

  return (
    <div className="mainMenuContainer" alt="main menu">
      <button>New Game</button>
      <button>Highscore</button>
      <button onClick={onAboutClick}>About</button>
    </div>
  );
}
