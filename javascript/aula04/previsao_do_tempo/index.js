const cidade = 'Itu'
const appid = '<API-KEY>'
const cnt = '2'
const units = 'metric'
const lang = 'pt_br'
const baseURL = 'api.openweathermap.org/data/2.5/forecast'
const url = `https://${baseURL}?q=${cidade}&appid=${appid}&cnt=${cnt}&lang=${lang}&units=${units}`

console.log(url)