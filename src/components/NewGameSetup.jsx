import "../styles/NewGameSetup.css"

export default function NewGameSetup({ onBackToMenu }) {
  return (
    <div className="mainMenuContainer" alt="Setting up new game">
      <h1>New Game</h1>
      <h4>How many letters in the word:</h4>
      <input type="number" className="nrInput"></input>
      <h4>Can contain same letter in more places:</h4>
      <label className="switch">
        <input type="checkbox"></input>
        <span className="slider round"></span>
      </label>
      <button className="startGame">Start Game</button>
      <button onClick={onBackToMenu}>Back to main menu</button>
    </div>
  );
}