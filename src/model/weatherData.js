import { getCoordinates } from "./api/geocode_api";
import { getWheather } from "./api/wheather_api";



const city = `Sao Paulo`
const encodedCity = encodeURIComponent(city)


getCoordinates(encodedCity)
.then( cords => {
    return getWheather(cords.lat,cords.lon)
}).then( weather => {
    console.log(weather.weather[0])
    console.log(weather.main);
;
})