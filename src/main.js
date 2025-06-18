//@ts-nocheck
    import { weatherForecastDaily } from "./utils/weatherForecastDaily"
    import {Store} from "./store/appStore"
    import { getInputValue } from "./events/search_input"
    import { UI } from "./utils/UI"
    const SearchInput = document.querySelector(`#search_input`)
   

    const ui = new UI()
    export const storeNew = new Store

    storeNew.initControl().then(
        weather => {
            let tempe = weather.tempC
            let location = `${weather._locationData.city}, ${weather._locationData.country}/${weather._locationData.continent}`
            ui.renderWeather(tempe,location)}
    )
 

   
    
        
      
       
        
        storeNew.setlocation = getInputValue(SearchInput,(data)=>{
            const {lat,lon} = data

             weatherForecastDaily(lat,lon).then( data =>{
                console.log(data);
                
             })
             
            storeNew.setlocation = {lat,lon}
                      
            console.log(storeNew.location)
        storeNew.loadWeather().then(weather => ui.renderWeather(weather.tempC))
        })
