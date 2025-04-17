import "../styles/MainMenu.css";

export default function MainMenu({
  onAboutClick,
  onNewGameClick,
  onHighscoreClick,
}) {
  return (
    <div className="mainMenuContainer" alt="Main menu">
      <button onClick={onNewGameClick}>New Game</button>
      <button onClick={onHighscoreClick}>Highscore</button>
      <button onClick={onAboutClick}>About</button>
    </div>
  );
}
