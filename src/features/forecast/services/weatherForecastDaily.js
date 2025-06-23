//@ts-nocheck
import { parseWeatherForecast } from "./parseWeatherForecast";

export const weatherForecastDaily = (array) => {
  const isDailyForecast = (element) => element.dt_txt.includes("12:00:00");
  const weatherForecastDaily5 = array.filter(isDailyForecast);

  weatherForecastDaily5.shift();
  return weatherForecastDaily5;
};
