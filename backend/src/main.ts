const express = require('express')
const app = express()
const port = 3000

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

app.listen(port, () => {
    console.log(`Server up on port ${port}`)
})
