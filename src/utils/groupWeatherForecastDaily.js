//@ts-nocheck
import { parseWeatherForecast } from "./parseWeatherForecast";
export function groupForecastDaily(array){
    const forecastDays = {}
    const datas = []
    const weatherForecastArray = array

    weatherForecastArray.forEach((element) => {
         const data =  element.dt_txt.slice(0,10)
        if(!forecastDays[data]){
            forecastDays[data] = []
        }
        forecastDays[data].push(element)
      if(!datas.includes(data)){
        datas.push(data)
      } 
       
        
    });
   return {forecastDays,datas}
}