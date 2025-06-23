//@ts-nocheck
import { weatherForecastDaily } from "../features/forecast/services/weatherForecastDaily";
import { parseForecastData } from "../features/forecast/services/parseForecastData";
import { UI } from "../features/ui/components/UI";
import { groupForecastDaily } from "../features/forecast/utils/groupWeatherForecastDaily";
import { orderForecastTempMinMax } from "../features/forecast/services/orderForecastDay";
import { changeTempUnit } from "../features/temperature/utils/ChangeTempUnit";
import { forecastControl } from "../features/forecast/services/forecastControl";
import { scrollMouseMove } from "../features/ui/handlers/scrollSwiper";
import { Store } from "../shared/store/appStore";
import { getInputValue } from "../features/ui/handlers/search_input";

scrollMouseMove();
const SearchInput = document.querySelector(`#search_input`);

const ui = new UI();
ui.renderChart();
export const storeNew = new Store();

storeNew.initControl().then((weather) => {
  const { weatherForecastDaily5, forecastTempMaxMin } =
    forecastControl(weather);
  parseForecastData(weatherForecastDaily5, forecastTempMaxMin, weather);
  let temperature = weather._tempK;
  let location = `${weather._locationData.city}, ${weather._locationData.country}/${weather._locationData.continent}`;
  ui.renderWeather(temperature, location, weatherForecastDaily5);
});

storeNew.setlocation = getInputValue(SearchInput, (data) => {
  const { lat, lon } = data;

  storeNew.setlocation = { lat, lon };

  storeNew.loadWeather().then((weather) => {
    const { weatherForecastDaily5, forecastTempMaxMin } =
      forecastControl(weather);
    parseForecastData(weatherForecastDaily5, forecastTempMaxMin, weather);
    let temperature = weather._tempK;
    let location = `${weather._locationData.city}, ${weather._locationData.country}/${weather._locationData.continent}`;
    ui.renderWeather(temperature, location, weatherForecastDaily5);
  });
});
