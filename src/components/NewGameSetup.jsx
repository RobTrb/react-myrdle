import "../styles/NewGameSetup.css";

export default function NewGameSetup({
  onBackToMenu,
  onStartGame,
  nrValue,
  setNrValue,
  letterRepeatValue,
  setLetterRepeatValue,
}) {
  const rangeOfLetters = letterRepeatValue ? "3-16" : "1-11";

  return (
    <div className="newGameSetupContainer" alt="Setting up new game">
      <form
        className="newGameSetup"
        onSubmit={(ev) => {
          ev.preventDefault();
          console.log(nrValue, letterRepeatValue);
        }}
      >
        <h1>New Game</h1>
        <h4 className="howManyLetters">How many letters in the word:</h4>
        <small className="howManyletters">
          (Must choose between: {rangeOfLetters} letters)
        </small>

        <input
          type="number"
          className="nrInput"
          min={rangeOfLetters.split("-")[0]}
          max={rangeOfLetters.split("-")[1]}
          value={nrValue}
          onChange={(ev) => {
            setNrValue(ev.target.value);
          }}
        ></input>

        <h4>Can contain same letter in more places:</h4>
        <label className="switch">
          <input
            type="checkbox"
            checked={letterRepeatValue}
            onChange={(ev) => {
              setLetterRepeatValue(ev.target.checked);
            }}
          ></input>
          <span className="slider round"></span>
        </label>

        <button
          className="startGame"
          onClick={(ev) => {
            ev.preventDefault();
            onStartGame();
          }}
        >
          Start Game
        </button>

        <button
          onClick={(ev) => {
            ev.preventDefault();
            onBackToMenu();
          }}
        >
          Back to main menu
        </button>
      </form>
    </div>
  );
}
