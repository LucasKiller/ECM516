// declarando constantes
const nome = 'José' //"José"
console.log(nome)
// nome = 'Pedro' // Não pode ser trocado a variável
// console.log(nome) // o código não chegará até aqui

// let ou var
let a = 2
a = 3
console.log(a)
a = '4'
console.log(a)

var b = 2
b = 3
b = 'Javascript'
console.log(`Aprendendo ${b}`)
var b = "Python"    // É possível redeclarar a variável com var
console.log(`Aprendendo ${b}`)

var idade = 18
console.log(`Oi, ${nome2}`) // É possível fazer uma chamada da variável antes dela ser declarada no var
if(idade >= 18){
    var nome2 = 'Lucas' // De forma alguma funcionaria esse código se estivesse com let aqui
    console.log(`Parabéns, ${nome2}. Você pode dirigir!`)
}
console.log('Tchau, ' + nome2 + '.')