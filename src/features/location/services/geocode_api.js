//@ts-nocheck
const API_KEY = `2da6f5c51cefd8e4d5bca21dbc5e3a9d`;


export async function getCoordinates(encodedCity){
    try{
        const geocodeApiUrl =`https://api.openweathermap.org/geo/1.0/direct?q=${encodedCity}&limit=1&appid=${API_KEY}`;
        const response = await fetch(geocodeApiUrl)
        const locationData = await response.json()
        
            if(locationData.length === 0) throw new Error('ciudad no encontrada')
            const {lat,lon} = locationData[0]
            
            return { lat, lon }
        }catch(error){
            console.error(`failed to get location of ${encodedCity}`)
        }
    

}

