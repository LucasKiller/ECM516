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

const funcoes = {
    ObservacaoClassificada: async (observacao) => {
        const observacoes = baseObservacoes[observacao.idLembrete] || []
        const atualizacao = observacoes.find(o => o.id === observacao.id)
        atualizacao.status = observacao.status
        await axios.post('http://localhost:10000/eventos', {
            tipo: 'ObservacaoAtualizada',
            dados: observacao
        })
    }
}

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
        idLembrete: idLembrete,
        status: 'Aguardando'
    }

    const observacoes = baseObservacoes[idLembrete] || []
    observacoes.push(observacao)
    baseObservacoes[idLembrete] = observacoes

    await axios.post('http://localhost:10000/eventos', {
        tipo: 'ObservacaoCriada',
        dados: observacao
    })
    res.status(201).json(observacoes)

})

// //POST /eventos
app.post('/eventos', async (req, res) => {
    try{
        const evento = req.body
        console.log(evento)
        funcoes[evento.tipo](evento.dados)
    }
    catch(e){
        console.log(e)
    }
    finally{
        res.end()
    }
})

app.delete('/lembretes/:idLembrete/observacoes', (req, res) => {
    const { idLembrete } = req.params
    const { id } = req.body

    const observacoes = baseObservacoes[idLembrete] || []
    const observacoesFiltradas = observacoes.filter(observacao => observacao.id !== id)
    baseObservacoes[idLembrete] = observacoesFiltradas

    res.json("id removido com sucesso!")
})

const port = 5000
app.listen(port, () => {
    console.log(`Observações. Porta ${port}.`)
})