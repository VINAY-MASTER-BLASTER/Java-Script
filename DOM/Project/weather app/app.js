let api = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
async function Weather(data) {
    let rdata = await fetch(data)
    let fdata = await rdata.json()
    console.log(fdata)
}
let value = Weather(api)
console.log(value)