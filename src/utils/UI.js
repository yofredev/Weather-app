
//@ts-nocheck
import { parseForecastData } from "./parseForecastData"
import { TemperatureUnitControl } from "../events/temperatureUnitControlValue"
export class UI {
    renderWeather(tempValue,locationValue,weatherForecastArray){
        const temp = document.querySelector(`.temp`)
        const location = document.querySelector(`.location`)
        const tempUnitSelect = document.querySelector(`.temp_unit-select`)
        
        
  
        temp.innerHTML = tempValue
        location.innerHTML = locationValue
        TemperatureUnitControl(tempUnitSelect)

    }
    renderForecast(weatherDescription, 
         weatherMain ,
         weatherIcon ,
         weatherTempMax, 
         weatherTempMin ,
         weather
        ){
        const {_tempMaxK,_tempMinK,_weatherType} = weather
            
            
        const weatherForecastHTML = document.querySelectorAll(`.weather_forecast`)
        const weatherForecastHTML1 = document.querySelector(`.weather_forecast1`)
        const weatherForecastTemp1 = weatherForecastHTML1.querySelector(`.weather_forecast--temp1`)
         const weatherForecastType1 = weatherForecastHTML1.querySelector(`.weather_forecast--type1`)
        weatherForecastTemp1.innerHTML = `${_tempMinK}/${_tempMaxK}`
        weatherForecastType1.innerHTML = _weatherType
        weatherForecastHTML.forEach((element,index)=>{
           
            
            const weatherForecastDescriptionHTML = element.querySelector(`.weather_forecast--type`)
            weatherForecastDescriptionHTML.innerHTML = weatherDescription[index]
           const weatherForecastTempHTML = element.querySelector(`.weather_forecast--temp`)
           weatherForecastTempHTML.innerHTML = `${weatherTempMin[index]}/${weatherTempMax[index]}`
        }) 

    }
}