import { getCoordinates } from "./api/geocode_api";
import { getWheather } from "./api/wheather_api";
import { Weather } from "./model/weatherData";
const city = `Sao Paulo`
const encodedCity = encodeURIComponent(city)




    getCoordinates(encodedCity)
    .then(cords => {return getWheather(cords.lat,cords.lon)})
    .then(weatherData => {
        const {temp,feels_like,temp_min,temp_max,} = weatherData.main
        const {main:weatherName,description:weatherDescription,icon} = weatherData.weather[0]
        const {speed:windSpeed} = weatherData.wind
        const weather1 = new Weather({encodedCity,weatherName,weatherDescription,icon,temp,temp_max,temp_min,feels_like,windSpeed})
        document.querySelector(`.temp`).classList.remove(`text-5xl`)
        document.querySelector(`.temp`).classList.remove(`top-50`)
        document.querySelector(`.temp`).classList.add(`text-[10rem]`)
        document.querySelector(`.temp`).classList.add(`top-30`)
        document.querySelector(`.temp`).innerHTML = weather1.tempC
    })
    