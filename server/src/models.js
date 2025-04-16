import mongoose from "mongoose";

const highscoreSchema = new mongoose.Schema({
    gameID: String,
    playerName: String,
    word: String,
    nrOfLetters: Number,
    repeatingLetters: Boolean,
    attempts: Number,
    time: String,    
});

const Highscore = mongoose.model("Highscore", highscoreSchema)

export {
    Highscore
}