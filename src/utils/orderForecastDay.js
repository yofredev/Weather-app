//@ts-nocheck
import { calculateForecastTempMinMax } from "./calculateForecastDailyTempMinMax"
export function orderForecastTempMinMax(groupForecastDaily){
    let DaysForecast = []
    const {forecastDays,datas} = groupForecastDaily
   
    for(const datas in forecastDays) {
        const block = forecastDays[datas]

        DaysForecast.push ( calculateForecastTempMinMax(block))
        
        
    }
   return DaysForecast
    
}
