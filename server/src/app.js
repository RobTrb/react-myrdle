import express from "express";
import fs from "fs/promises";
import { serviceAdapter } from "./utils.js";
import mongoose from "mongoose";
import { Highscore } from "./models.js";
import { engine } from "express-handlebars";

const GAMES = [];

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./server/static/templates");

app.use("/static", express.static("./server/static"))
app.use("/assets", express.static("./dist/assets"));
app.use(express.json());

//Static route for frontend build
app.get("/", async (req, res) => {
  try {
    const buf = await fs.readFile("./dist/index.html");
    const text = buf.toString();
    res.send(text);
  } catch (error) {
    console.error("Could not read index.html");
    res.status(500).send("internal server error");
  }
});

//API routes

app.post("/api/games", async (req, res) => {
  const { nrValue, letterRepeatValue, id, guess } = req.body;

  const game = await serviceAdapter.gameHandler(
    nrValue,
    letterRepeatValue,
    id,
    guess
  );

  if (game === null) {
    return res
      .status(404)
      .json({ error: "Game not found! Refresh browser and start over" });
  }
  console.log(game);
  res.status(201).json({ game });
});

app.post("/api/highscores", async (req, res) => {
  await mongoose.connect("mongodb://localhost:27017/highscores");

  const {
    gameID,
    playerName,
    word,
    nrOfLetters,
    repeatingLetters,
    attempts,
    time,
  } = req.body;

  const newHighscore = new Highscore({
    gameID: gameID,
    playerName: playerName,
    word: word,
    nrOfLetters: nrOfLetters,
    repeatingLetters: repeatingLetters,
    attempts: attempts,
    time: time,
  });

  await newHighscore.save();

  res.status(201).json({ message: "Highscore saved!" });
});

app.get("/api/highscore", async (req, res) => {
  await mongoose.connect("mongodb://localhost:27017/highscores");
  console.log("connection to db made");

  const highscores = await Highscore.find();
  console.log("highscores loaded");

  const highscoreList = highscores.map((score) => ({
    name: score.playerName,
    word: score.word,
    nrOfLetters: score.nrOfLetters,
    letterRepeat: score.repeatingLetters ? "On" : "Off",
    attempts: score.attempts,
    time: score.time,
  }));

  res.render("highscoreTemplate", {
    layout: false,
    highscore: highscoreList,
  });
});

export default app;
