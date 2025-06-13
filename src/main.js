
    import {Store} from "./store/appStore"
    import { getInputValue } from "./events/search_input"
    const SearchInput = document.querySelector(`#search_input`)
   
    const storeNew = new Store

    storeNew.initControl()
 

   
    
        
      
       
        
        storeNew.setlocation = getInputValue(SearchInput,(data)=>{
            const {lat,lon} = data
            storeNew.setlocation = {lat,lon}
            console.log(storeNew.location)
        storeNew.loadWeather().then(weather => console.log(weather))
        })
