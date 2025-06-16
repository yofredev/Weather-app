import { getLocation } from "/src/api/geolotion_api";
import { Weather } from "/src/model/weatherData";
import { parseWeatherFetch } from "../utils/parseWeather";
import { parserOpencafetch } from "../utils/parseOpencagedata";
import { getCoordinates } from "../api/geocode_api";




export class Store {
    static instance 
       constructor(){
        if(!!Store.instance){
            return Store.instance
        }
        Store.instance = this
        this.currentWeather = null
        this.defaultLocation = 
        {city:'London',
        country:'United Kingdom',
        continent:`Europe`
        }
        this.location = null
    }
    get getlocation(){
       return this.location
    }
    set setlocation(location){
        this.location = location
    }
    get GetWeather(){
        return this.currentWeather
     }
     set setWeather(value){
         this.currentWeather = value
     }
        setDefaultWeather(){
            return new Promise((resolve)=>{

                getCoordinates(this.defaultLocation.city).then(
                    location =>{ 
                    parseWeatherFetch(location.lat,location.lon).then(
                        weatherData =>{
                        const {weatherName,weatherType,weatherIcon,windSpeed,temp,feelsLikeTemp,tempMin,tempMax} = weatherData
                        console.log(weatherName,weatherType,weatherIcon,windSpeed,temp,feelsLikeTemp,tempMin,tempMax)
                        this.setWeather = new Weather({locationData:this.defaultLocation,weatherName,weatherType,weatherIcon,windSpeed,temp,feelsLikeTemp,tempMin,tempMax})
                            resolve(this.currentWeather);
                            
                    }
                    )
                    }
                )
            })
        
    }
    loadWeather(){
        return new Promise((resolve)=>{
        Promise.all([parseWeatherFetch(this.location.lat, this.location.lon),parserOpencafetch(this.location.lat,this.location.lon)]).then(
            ([weatherData,opencagedata]) => {
                
                const {weatherName,weatherType,weatherIcon,windSpeed,temp,feelsLikeTemp,tempMin,tempMax} = weatherData
                this.setWeather = new Weather({locationData: opencagedata,weatherName,weatherType,weatherIcon,windSpeed,temp,feelsLikeTemp,tempMin,tempMax})
                resolve(this.currentWeather)

            }
        )          
    }    
)
}
locationWeather(){
    return new Promise((resolve)=>{

        getLocation().then(
            location =>{
                console.log(location)
                
                Promise.all([parseWeatherFetch(location.latitude,location.longitude),parserOpencafetch(location.latitude,location.longitude)]).then(
                    ([weatherData,opencagedata]) => {
                        
                        const {weatherName,weatherType,weatherIcon,windSpeed,temp,feelsLikeTemp,tempMin,tempMax} = weatherData
                        this.setWeather = new Weather({locationData: opencagedata,weatherName,weatherType,weatherIcon,windSpeed,temp,feelsLikeTemp,tempMin,tempMax})
                        resolve(this.currentWeather)
        
                    })
            }
        )
    })
}
initControl(){
   return new Promise((resolve) =>{    navigator.permissions.query({ name: 'geolocation' })
        .then((result) => {
        if (result.state === 'granted') {
            this.locationWeather().then(weather =>{
                resolve(weather)
            })
        } else if (result.state === 'prompt') {
            this.setDefaultWeather().then(
                weather => resolve(weather) 
              )    
          
        } else if (result.state === 'denied') {
          console.warn('Permiso denegado');
          this.setDefaultWeather().then(
            weather =>
             { console.log(weather);
             resolve(weather)
             }
          )
          
        }
      });})
}
}





























  