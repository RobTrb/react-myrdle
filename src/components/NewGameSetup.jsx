export default function NewGameSetup({ onBackToMenu }) {
  return (
    <div className="mainMenuContainer" alt="Setting up new game">
      <h1>New Game</h1>
      <h5>How many letters in the word:</h5>
      <input type="number"></input>
      <h5>Word can contain the same letter in more than one place</h5>
      <label class="switch">
        <input type="checkbox"></input>
        <span class="slider round"></span>
      </label>
      <button>Start Game</button>
      <button onClick={onBackToMenu}>Back to main menu</button>
    </div>
  );
}
