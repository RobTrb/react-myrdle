import "../styles/GuessInput.css"

function GuessInput() {
    return (
        <div className="GuessInputContainer">
            <input className="guessInputField" type="text"></input>
            <button className="guessBtn">Guess</button>
        </div>
    )
}

export default GuessInput;