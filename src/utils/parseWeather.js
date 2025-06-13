import {getWheather} from "/src/api/wheather_api"


export function parseWeatherFetch(lat,lon){

return getWheather(lat,lon).then(weatherData => {                       
    const {main:weatherName,description:weatherType,icon:weatherIcon} = weatherData.weather[0]
    const {speed:windSpeed} = weatherData.wind
    const {temp:temp,feels_like:feelsLikeTemp,temp_min:tempMin,temp_max:tempMax} = weatherData.main
    return {weatherName,weatherType,weatherIcon,windSpeed,temp,feelsLikeTemp,tempMin,tempMax}
})
}