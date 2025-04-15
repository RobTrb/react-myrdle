import "../styles/Rules.css";

function Rules({ rulesModal, setRulesModal }) {
  return (
    <>
      <div className={rulesModal}>
        <span
          className="closeRules"
          onClick={() => {
            setRulesModal("rulesModalContainer");
          }}
        >
          X
        </span>
        <h2 className="rulesHeader">Rules</h2>
        <p className="rulesText">
          Guess the correct word. The color of the letters in the boxes mean the
          following:
        </p>
        <ul className="rulesList">
          <li>
            <a className="correct">Green</a>
            <a> means both the letter and the placement is correct.</a>
          </li>
          <li>
            <a className="missplaced">Yellow</a>
            <a> means the letter is correct but the placement is incorrect.</a>
          </li>
          <li>
            <a className="incorrect">Red</a>
            <a> means the letter is incorrect and not found in the word.</a>
          </li>
        </ul>
        <p className="rulesText">
          If your guess is shorter than the nr of letters you chose the game
          will fill in the remaining letters with "*"
        </p>
      </div>
    </>
  );
}

export default Rules;
