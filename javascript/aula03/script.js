const pessoa = {
    nome: "Maria",
    idade: 21,
    endereco: {
        logradouro: "Rua B",
        numero: 121,
        bairro: {
            nome: "J"
        }
    }
}

console.log(pessoa.nome)
console.log(pessoa['idade'])
console.log(pessoa.endereco.logradouro)

const concessionaria = {
    cnpj: "123456",
    endereco: {
        logradouro: "Rua B",
        numero: 121,
        bairro: {
            nome: "J"
        }
    },
    carros: [
        {
            marca: "X",
            modelo: "Carro Bom",
            ano: 2020
        },
        {
            marca: "V",
            modelo: "Carro Ruim",
            ano: 2022
        }
    ]
}

console.log(concessionaria.carros[0].ano)

for (let i = 0; i < concessionaria.carros.length; i++){
    console.log(concessionaria.carros[i].modelo)
}

const calculadora = {
    somar: function(num1, num2) {
        return num1 + num2
    },
    subtrair: (num1, num2) => num1 - num2
}

console.log(calculadora.somar(2, 3))
console.log(calculadora.subtrair(5, 3))

//processamento síncrono (bloqueante) e processamento assíncrono (não bloqueante)

//Síncrono
const oi = () => console.log('Oi!')

console.log('Começou...')
oi()
console.log('Terminou...')

//Assíncrono
const fs = require('fs')

const abrirArquivo = (nomeArquivo) => {
    const exibirConteudo = function(erro, conteudo){ //callback
        if(erro){
            console.log(`Deu erro: ${erro}`)
        }
        else{
            console.log(`Funcionou: ${conteudo.toString()}`)
            const dobro = Number(conteudo.toString()) * 2
            const finalizar = (erro) => {
                if(erro){
                    console.log(`A escrita deu erro: ${erro}`)
                }
                else{
                    console.log("A escrita funcionou!")
                }
            }
            fs.writeFile(nomeArquivo, dobro.toString(), finalizar)
        }
    }
    //Assíncrono
    fs.readFile(nomeArquivo, exibirConteudo)
    console.log('Fim da função exibirConteudo')
}

abrirArquivo("arquivo.txt")
