//@ts-nocheck
import { initApp } from "./utils/init_app";
import { weatherForecastDaily } from "./utils/weatherForecastDaily";
import { parseForecastData } from "./utils/parseForecastData";
import { Store } from "./store/appStore";
import { getInputValue } from "./events/search_input";
import { UI } from "./utils/UI";
import { groupForecastDaily } from "./utils/groupWeatherForecastDaily";
import { orderForecastTempMinMax } from "./utils/orderForecastDay";

initApp()
const SearchInput = document.querySelector(`#search_input`);

const ui = new UI();
export const storeNew = new Store();

storeNew.initControl().then((weather) => {
   const weatherForecast40 = weather._weatherForecast
  
  const groupForecastDailyArray = groupForecastDaily(weatherForecast40)
  
  const forecastTempMaxMin = orderForecastTempMinMax(groupForecastDailyArray) 
    const weatherForecastDaily5 = weatherForecastDaily(weatherForecast40)

  parseForecastData(weatherForecastDaily5,forecastTempMaxMin,weather);

  let tempe = weather.tempC;
  let location = `${weather._locationData.city}, ${weather._locationData.country}/${weather._locationData.continent}`;
  ui.renderWeather(tempe, location, weatherForecastDaily5);
});

storeNew.setlocation = getInputValue(SearchInput, (data) => {
  const { lat, lon } = data;


  storeNew.setlocation = { lat, lon };

  console.log(storeNew.location);
  storeNew.loadWeather().then((weather) => {
    
    let weatherForecastArray = weather._weatherForecast
  parseForecastData(weatherForecastArray);

  let tempe = weather.tempC;
  let location = `${weather._locationData.city}, ${weather._locationData.country}/${weather._locationData.continent}`;
  ui.renderWeather(tempe, location, weatherForecastArray);
  });
});
