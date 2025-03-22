// 1 + 2 + 3 + ... + (n-2) + (n-1) + n
function calculoDemorado(n) {
    const p = new Promise((resolve, reject) => {
        let ac = 0
        for (let i = 1; i <= n; i++) ac += i
        resolve(ac)
    })
    return p
}

const resultado = calculoDemorado(10)
resultado.then((res) => {
    console.log(`Funcionou: ${res}`)
    calculoDemorado(res).then((res2) => {
        console.log(`Funcionou(2): ${res2}\n`)
    })
})
.catch(function(err){
    console.log(`Erro: ${err}`)
})

const calculoRapidinho = (n) => {
    return n < 0 ? Promise.reject('Apenas positivos, por favor') : Promise.resolve((n / 2) * (n  + 1))
    // return new Promise((resolve, reject) => {
    //     resolve((n / 2) * (n + 1))
    // })
}

const resultado2 = calculoRapidinho(-10)
resultado2.then((res) => {
    console.log(`Funcionou rapidinho: ${res}`)
})
.catch(err => console.log(`Erro: ${err}`))