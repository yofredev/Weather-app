//@ts-nocheck
import { groupForecastDaily } from "../utils/groupWeatherForecastDaily";
import { orderForecastTempMinMax } from "./orderForecastDay";
import { weatherForecastDaily } from "./weatherForecastDaily";
export const forecastControl = (weatherModel) => {
  const weatherForecast40 = weatherModel._weatherForecast;

  const groupForecastDailyArray = groupForecastDaily(weatherForecast40);

  const forecastTempMaxMin = orderForecastTempMinMax(groupForecastDailyArray);

  const weatherForecastDaily5 = weatherForecastDaily(weatherForecast40);

  return { weatherForecastDaily5, forecastTempMaxMin };
};
