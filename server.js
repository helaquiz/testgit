const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("Request on / and response is Hello World")
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})