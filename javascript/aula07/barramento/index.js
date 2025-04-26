const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

app.post('/eventos', async (req, res) => {

    const evento = req.body

    try {
        await axios.post('http://localhost:4000/eventos', evento)
    }
    catch(e) {
        console.log(e)
    }

    try {
        await axios.post('http://localhost:5000/eventos', evento)
    }
    catch(e) {
        console.log(e)
    }

    return res.json({ status: 'ok' })

})

const port = 10000
app.listen(port, () => {
    console.log(`Barramento. Porta ${port}.`)
})