//@ts-nocheck
import { UI } from "../../ui/components/UI";
import { changeTempUnit } from "../../temperature/utils/ChangeTempUnit";
import { getDayForecast } from "./getDayTitleForecast";
export const parseForecastData = (array, forecastTemp, initialWeather) => {
  const weatherTempMinArray = [];
  const weatherTempMaxArray = [];
  const weatherMainArray = [];
  const weatherDescriptionArray = [];
  const weatherIconArray = [];

  array.forEach((element, index) => {
    const ui = new UI();
    const { weather, main } = element;
    const daysArray = getDayForecast();
    const weatherDescription = weather[0].description;
    const weatherMain = weather[0].main;
    const weatherIcon = weather[0].icon;
    const weatherTempMax = main.temp_max;
    const weatherTempMin = main.temp_min;
    const { tempMax, tempMin } = forecastTemp[index];

    weatherTempMaxArray.push(tempMax);
    weatherTempMinArray.push(tempMin);


    weatherMainArray.push(weatherMain);
    weatherDescriptionArray.push(weatherDescription);
    weatherIconArray.push(weatherIcon);

console.log(weatherIconArray);

    ui.renderForecast(
      weatherDescriptionArray,
      weatherMainArray,
      weatherIconArray,
      weatherTempMaxArray,
      weatherTempMinArray,
      daysArray,
      initialWeather
    );
  });
};
