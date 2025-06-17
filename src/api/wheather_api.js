//@ts-nocheck
const API_KEY = `2da6f5c51cefd8e4d5bca21dbc5e3a9d`;

export async function getWheather(lat,lon){
    const wheatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    const response = await fetch(wheatherApiUrl)
    
        if( !response.ok )throw new Error(`bad response`)
        const data = await response.json()
            
        if(data.length === 0 ) throw new Error(`Ciudad no encontrada`)
        const {weather,main,wind} = data
        return {weather, main,wind}
}
