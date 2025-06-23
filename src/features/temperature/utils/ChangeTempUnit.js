//@ts-nocheck
import { kelvinToCelsius } from "./kelvinToCelcius";
import { kelvinToFahrenheit } from "./kelvinToFahrenheit ";
import data from "/src/shared/config/app.config.json" assert { type: "json" };
export const changeTempUnit = (tempertureKelvin) => {
  const tempUnit = {
    celcius: kelvinToCelsius(tempertureKelvin),
    fahrenheit: kelvinToFahrenheit(tempertureKelvin),
  };

  return tempUnit[data.tempUnit];
};
