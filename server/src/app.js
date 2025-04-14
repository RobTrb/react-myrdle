import express from 'express'
import fs from 'fs/promises'
import { serviceAdapter } from './utils.js'

const GAMES = []

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
    const { nrValue, letterRepeatValue, id, guess } = req.body;    

    const game = await serviceAdapter.gameHandler(nrValue, letterRepeatValue, id, guess);
    
    if (game === null){
        return res.status(404).json({error: "Game not found! Refresh browser and start over"})
    }
    console.log(game)
    res.status(201).json({ game });
})


export default app;