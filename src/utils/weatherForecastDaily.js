//@ts-nocheck
import { parseWeatherForecast } from "./parseWeatherForecast";

export const weatherForecastDaily = async (lat,lon) =>{
    const weatherForecastHourly40 = await parseWeatherForecast(lat,lon)

    const isDailyForecast = element => element.dt_txt.includes("12:00:00");
    const weatherForecastDaily5 = weatherForecastHourly40.filter(isDailyForecast) 

    return weatherForecastDaily5

}