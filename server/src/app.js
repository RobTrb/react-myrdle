import express from 'express'
import fs from 'fs/promises'

const app = express()

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

app.use('/assets', express.static('./dist/assets'))

//API routes


export default app;