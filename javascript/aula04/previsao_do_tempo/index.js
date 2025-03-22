const cidade = 'Itu'
const appid = 'a36a7af7a5c21d755347ff0a39b70dd1'
const cnt = '2'
const units = 'metric'
const lang = 'pt_br'
const baseURL = 'api.openweathermap.org/data/2.5/forecast'
const url = `https://${baseURL}?q=${cidade}&appid=${appid}&cnt=${cnt}&lang=${lang}&units=${units}`

console.log(url)