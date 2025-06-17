//@ts-nocheck

    import {Store} from "./store/appStore"
    import { getInputValue } from "./events/search_input"
    import { UI } from "./utils/UI"
    const SearchInput = document.querySelector(`#search_input`)
   

    const ui = new UI()
    export const storeNew = new Store

    storeNew.initControl().then(
        weather => {
            let tempe = weather.tempC
            
            ui.renderWeather(tempe)}
    )
 

   
    
        
      
       
        
        storeNew.setlocation = getInputValue(SearchInput,(data)=>{
            const {lat,lon} = data
            storeNew.setlocation = {lat,lon}
            console.log(storeNew.location)
        storeNew.loadWeather().then(weather => ui.renderWeather(weather.tempC))
        })
