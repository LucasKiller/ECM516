const axios = require('axios')

const cidade = 'Itu'
const appid = '<API-KEY>'
const cnt = '2'
const units = 'metric'
const lang = 'pt_br'
const baseURL = 'api.openweathermap.org/data/2.5/forecast'
const url = `https://${baseURL}?q=${cidade}&appid=${appid}&cnt=${cnt}&lang=${lang}&units=${units}`

console.log(url)

axios.get(url)
.then((res) => {
    console.log(res.data)
    console.log("==========================")
    return res.data
})
.then(function(res){
    console.log(`cnt: ${res.cnt}`)
    console.log("==========================")
    return res
})
.then((abc) => {
    console.log(`A temperatura máxima de hoje será entre ${abc.list[1].main.temp_max}°C ~ ${abc.list[0].main.temp_max}°C`)
    console.log("==========================")
    return {list: abc.list, city: abc.city}
})
.then((res) => {
    for(let previsao of res.list) {
        console.log(`Descrição: ${previsao.weather[0].description}`)
        console.log(`Sensação térmica ${previsao.main.feels_like}°C\n`)
    }
    console.log(`Nascer do sol: ${new Date(res.city.sunrise * 1000).toLocaleTimeString()}`)
    console.log(`Pôr do sol: ${new Date(res.city.sunset * 1000).toLocaleTimeString()}`)
    console.log("==========================")
})
