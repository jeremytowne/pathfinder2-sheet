import express from 'express'
import fs from 'fs'
import path from 'path'

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/characters', (req, res) => {
  fs.readFile(path.join(__dirname, './characters/manifest.json'), (err, data) => {
    if (err) throw err
    res.send(JSON.parse(data))
  })
})

app.get('/character/:name', (req, res) => res.send('char'))

app.post('/character', (req, res) => {

})

export default app