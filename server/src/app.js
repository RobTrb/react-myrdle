import express from 'express'
import fs from 'fs/promises'
import { serviceAdapter } from './utils.js'

const app = express()

app.use('/assets', express.static('./dist/assets'))
app.use(express.json());

//Static route for frontend build
app.get('/', async (req, res) =>{
    try {
    const buf = await fs.readFile('./dist/index.html')
    const text = buf.toString()
    res.send(text)
    } catch (error) {
        console.error('Could not read index.html')
        res.status(500).send('internal server error')
    }
})



//API routes

app.post("/api/games", async (req, res)=>{
    const { nrValue, letterRepeatValue } = req.body;
    const randomWord = await serviceAdapter.getRandomWord(nrValue, letterRepeatValue)

    const newGame = {
        correctWord: randomWord,
        guesses: [],
        id: "test",
        startTime: new Date(),
    }

    console.log(newGame)

    res.status(201).json({ id: newGame.id });
})


export default app;