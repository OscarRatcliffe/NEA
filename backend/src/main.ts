const express = require('express')
const fs = require('fs')
const app = express()
const port = 4000
import animationData from '../data/animations/MrP.json';

app.get('/', (req: any, res: any) => {
    res.statusCode = 501;
    res.send("Please specifiy a path")
})

app.get('/Test/:TestVar', (req: any, res: any) => {
    res.send({
        "Test": "Test",
        "URL variable": req.params.TestVar
    })
})

app.get('/Animation', (req: any, res: any) => {
    res.send(animationData)
})

app.listen(port, () => {
    console.log(`Server up on port ${port}`)
})
