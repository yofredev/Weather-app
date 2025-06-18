//@ts-nocheck
import { weatherForecastFetch } from "../api/weather_forecast5_api";

export const parseWeatherForecast = async (lat,lon) => {
    
    const weatherForecastData = await weatherForecastFetch(lat,lon)

    return weatherForecastData.list
}