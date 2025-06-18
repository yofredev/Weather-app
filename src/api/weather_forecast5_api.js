//@ts-nocheck
export const weatherForecastFetch = async (lat,lon) => {

const API_KEY = '2da6f5c51cefd8e4d5bca21dbc5e3a9d';

const fetchUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    const response = await fetch(fetchUrl)
    if(!response.ok) throw new console.error(`bad response ${response.status}`);
     
    const weatherForecastData = await response.json()
   
    return weatherForecastData
    
    
}