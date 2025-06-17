//@ts-nocheck
const API_KEY = `2da6f5c51cefd8e4d5bca21dbc5e3a9d`;

export function getWheather(lat,lon){
    const wheatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    return fetch(wheatherApiUrl)
    .then( response =>{
        if( response.ok ){
            console.log({status:response.status});
            return response.json()
        }else{
            console.log(response);
            
        }
    })
    .then(data => {
        if(data.length === 0 ) throw new Error(`Ciudad no encontrada`)
        const {weather,main,wind} = data
        return {weather, main,wind}
        } )

}
