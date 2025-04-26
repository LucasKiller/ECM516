const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())

/*
{
    1: {
        id:
        texto: 'fazer café'
    },
    2: {
        id: 2,
        texto: 'ir à feira'
    }
}
*/

const baseLembretes = {}
let id = 1
//localhost:4000/lembretes
//GET /lembretes () => {}
app.get('/lembretes', (req, res) => {
    res.json(baseLembretes)
})

//localhost:4000/lembretes
//POST /lembretes () => {}
app.post('/lembretes', async (req, res) => {
    const texto = req.body.texto // ou const { texto } = req.body

    const lembrete = {
        id: id,
        texto: texto
    }
    
    baseLembretes[id] = lembrete

    id++

    axios.post('http://localhost:10000/eventos', {
        tipo: 'LembreteCriado',
        dados: lembrete
    })
    .then((resAxios) => {
        console.log(resAxios.data)
    })
    .catch((e) => {
        console.log(e)
    })
    .finally(() => {
        return res.status(201).json(lembrete)
    })

})

//POST /eventos
app.post('/eventos', (req, res) => {
    console.log(req.body)
    res.end()
})

//localhost:4000/lembretes
//DELETE /lembretes () => {}
app.delete('/lembretes', (req, res) => {
    const idRemove = req.body.id

    delete baseLembretes[idRemove]

    return res.status(200).json("id removido com sucesso!")
})

const port = 4000
app.listen(port, () => {
    console.log(`Lembretes. Porta ${port}.`)
})