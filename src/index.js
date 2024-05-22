import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { personajes } from './data.js'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

app.get('/api/personajes', (req, res) => {
    res.json(personajes)
})

app.get('/api/personajes/:id', (req, res) => {
    const pj = personajes.find(personaje => req.params.id == personaje.id)
    if (pj) {
        res.status(200).json({ personaje: pj })
    } else {
        res.status(404).json({ error: 'personaje no encontrado' })
    }
})


app.listen(process.env.PORT, () => {
    console.log('Server is running in port ' + process.env.PORT)
})