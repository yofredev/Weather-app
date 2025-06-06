const API_KEY = `2da6f5c51cefd8e4d5bca21dbc5e3a9d`;


export function getCoordinates(encodedCity){
    const geocodeApiUrl =`https://api.openweathermap.org/geo/1.0/direct?q=${encodedCity}&limit=1&appid=${API_KEY}`;
    return fetch(geocodeApiUrl)
.then(  res => {
    if(res.ok){
    console.log({status:res.status})
    return res.json()
}else{
    throw new Error({status:res.status})
}}) 
.then(data => {
    if(data.length === 0) throw new Error('ciudad no encontrada')
    const {lat,lon} = data[0]
    console.log({lat:lat},{lon:lon});
    
    return { lat, lon }
}) 

}

