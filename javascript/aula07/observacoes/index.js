const express = require('express')
const axios = require('axios')
const { v4: uuidv4 } = require('uuid')
const app = express()
app.use(express.json())

/*
{
    1: [
        {
            id: 1001,
            idLembrete: 1,
            texto: Sem açúcar
        },
        {
            id: 1002,
            idLembrete: 1,
            texto: Comprar o pó
        }
    ],
    2: [
        {
            id: 2001,
            idLembrete: 1,
            texto: Sabor morango
        },
        {
            id: 2002,
            idLembrete: 1,
            texto: 750mL
        }
    ]
}
*/

const baseObservacoes = {}
//localhost:4000/lembretes/id/observacoes
//GET /observacoes () => {}
app.get('/lembretes/:idLembrete/observacoes', function(req, res){
    const idLembrete = req.params.idLembrete
    res.json(baseObservacoes[idLembrete] || [])
})

//localhost:4000/lembretes/id/observacoes
//POST /observacoes () => {}
app.post('/lembretes/:idLembrete/observacoes', async (req, res) => {
    const idObservacao = uuidv4()
    const { texto } = req.body
    const { idLembrete } = req.params

    const observacao = {
        id: idObservacao,
        texto: texto,
        idLembrete: idLembrete
    }

    const observacoes = baseObservacoes[idLembrete] || []
    observacoes.push(observacao)
    baseObservacoes[idLembrete] = observacoes

    axios.post('http://localhost:10000/eventos', {
        tipo: 'ObservacaoCriada',
        dados: observacao
    })
    .then((resAxios) => {
        console.log(resAxios.data)
    })
    .catch((e) => {
        console.log(e)
    })
    .finally(() => {
        return res.status(201).json(observacao)
    })

})

// //POST /eventos
app.post('/eventos', (req, res) => {
    console.log(req.body)
    res.end()
})

app.delete('/lembretes/:idLembrete/observacoes', (req, res) => {
    const { idLembrete } = req.params
    const { id } = req.body

    const observacoes = baseObservacoes[idLembrete] || []
    const observacoesFiltradas = observacoes.filter(observacao => observacao.id !== id)
    baseObservacoes[idLembrete] = observacoesFiltradas

    return res.status(200).json("id removido com sucesso!")
})

const port = 5000
app.listen(port, () => {
    console.log(`Observações. Porta ${port}.`)
})