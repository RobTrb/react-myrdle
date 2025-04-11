import "../styles/GuessInput.css"

function GuessInput({ setRulesModal }) {
    return (
        <div className="GuessInputContainer">
            <button className="rulesBtn" onClick={(ev) =>{
                ev.preventDefault
                setRulesModal("rulesModalContainer active")
            }}>Rules</button>
            <input className="guessInputField" type="text"></input>
            <button className="guessBtn">Guess</button>
        </div>
    )
}

export default GuessInput;