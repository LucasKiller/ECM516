const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

const baseObservacoes = {}

palavraChave = 'Importante!'

const funcoes = {
    ObservacaoCriada: async (observacao) => {
        observacao.status = observacao.texto.includes(palavraChave) ? 'Importante!' : 'Comum.'
        await axios.post('http://localhost:10000/eventos', {
            tipo: 'ObservacaoClassficada',
            dados: observacao
        })
    }
}

app.post('/eventos', async function(req, res) {
    try{
        const evento = req.body
        console.log(evento)
        await funcoes[evento.tipo](evento.dados)
    }
    finally{
        res.end()
    }
})

const port = 7000
app.listen(port, () => console.log(`Classificação. Porta ${port}.`))