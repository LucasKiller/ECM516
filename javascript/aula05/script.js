// async/await
async function hello(nome) {
    return `Oi, ${nome}`
}

hello('Ana').then(res => console.log(res))

// síncrono
// const res = hello("Ana")
// console.log(res)
console.log("Acabou!")

// async/await
const fatorial = (n) => {
    if(n < 0) return Promise.reject('Apenas valores positivos!')
        // return Promise.resolve(res)
    return new Promise((resolve, reject) => {
        let res = 1
        for(let i = 2; i <= n; i++) res *= i
        resolve(res)
    })
}

const comThenCatch = () => {
    fatorial(10)
    .then(res => console.log(`Resultado: ${res}`))
    .catch(err => console.log(`Erro: ${err}`))

    fatorial(-10)
    .then(res => console.log(`Resultado: ${res}`))
    .catch(err => console.log(`Erro: ${err}`))
}
comThenCatch()

const comAsyncAwait = async () => {
    try {
        const f1 = await fatorial(10)
        console.log(f1)
    }
    catch(err) {
        console.log(`Erro: ${err}`)
    }

    try {
        const f2 = await fatorial(-10)
        console.log(f2)
    }
    catch(err) {
        console.log(`Erro: ${err}`)
    }
}
comAsyncAwait()