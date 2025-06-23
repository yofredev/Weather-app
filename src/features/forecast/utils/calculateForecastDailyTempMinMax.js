//@ts-nocheck
export function calculateForecastTempMinMax(forecastDailyBlock){

  const tempMin =  forecastDailyBlock.map( b => b.main.temp_min)
  const tempMax =  forecastDailyBlock.map( b => b.main.temp_max)

    return{
        tempMax:Math.max(...tempMax),
        tempMin:Math.min(...tempMin),
    }
}