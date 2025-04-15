import "../styles/HighScoreSubmit.css";
import { useState, useEffect } from "react";

function HighScoreSubmit({ currentGame, letterRepeatValue }) {
    return (
        <div className="submitContainer">
            <h3>Highscore</h3>
            <input type="text"></input>
            <p>Click "Submit" to submit name and stats to the highscore list</p>
            <p>Click "Quit" to quit to main menu without submitting highscore</p>
            <div className="buttonContainer">
                <button>Quit</button>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default HighScoreSubmit;