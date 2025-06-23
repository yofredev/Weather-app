//@ts-nocheck
import { parseForecastData } from "../../forecast/services/parseForecastData";
import { temperatureUnitControl } from "../../temperature/handlers/temperatureUnitControlValue";
import { changeTempUnit } from "../../temperature/utils/ChangeTempUnit";
import { builtWheatherIcon } from "../../forecast/utils/builtWeatherIcon";
import Chart from "chart.js/auto";

export class UI {
  renderWeather(tempValue, locationValue, weatherForecastArray) {
    const temp = document.querySelector(`.temp`);
    const location = document.querySelector(`.location`);
    const tempUnitSelect = document.querySelector(`.temp_unit-select`);

    temperatureUnitControl(tempUnitSelect);

    temp.innerHTML = changeTempUnit(tempValue);
    location.innerHTML = locationValue;
  }
  renderChart() {
    (async function () {
      const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
      ];

      new Chart(document.getElementById("acquisitions"), {
        type: "line",
        data: {
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: "Acquisitions by year",
              data: data.map((row) => row.count),
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
            x: {
              grid: {
                display: true,
              },
            },
          },
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 14,
                },
              },
            },
            tooltip: {
              mode: "index",
              intersect: false,
            },
          },
        },
      });
    })();
  }
  renderForecast(
    weatherDescription,
    weatherMain,
    weatherIcon,
    weatherTempMax,
    weatherTempMin,
    days,
    weather
  ) {
    const { _tempMaxK, _tempMinK, _weatherType } = weather;
    const {_weatherIcon} = weather;
    const builtIcon = builtWheatherIcon()
       
    const weatherForecastHTML = document.querySelectorAll(`.weather_forecast`);
    const weatherForecastIconHTML = document.querySelector(`.weather_forecast--icon`)
        weatherForecastIconHTML.src = builtWheatherIcon(_weatherIcon)
    const weatherForecastHTML1 = document.querySelector(`.weather_forecast1`);
    const weatherForecastTemp1 = weatherForecastHTML1.querySelector(
      `.weather_forecast--temp1`
    );
    const weatherForecastType1 = weatherForecastHTML1.querySelector(
      `.weather_forecast--type1`
    );
    weatherForecastTemp1.innerHTML = `${changeTempUnit(
      _tempMinK
    )}/${changeTempUnit(_tempMaxK)}`;
    weatherForecastType1.innerHTML = _weatherType;
    weatherForecastHTML.forEach((element, index) => {
      if (index === 0) {
        const weatherForecastIconHTML = element.querySelector(`.weather_forecast--icon`)
        weatherForecastIconHTML.src = builtWheatherIcon(weatherIcon[0])
        const weatherForecastDescriptionHTML = element.querySelector(
          `.weather_forecast--type`
        );
        weatherForecastDescriptionHTML.innerHTML = weatherDescription[index];
        const weatherForecastTempHTML = element.querySelector(
          `.weather_forecast--temp`
        );
        weatherForecastTempHTML.innerHTML = `${changeTempUnit(
          weatherTempMin[index]
        )}/${changeTempUnit(weatherTempMax[index])}`;
        return;
      }
      const weatherForecastIconHTML = element.querySelector(`.weather_forecast--icon`)
        weatherForecastIconHTML.src = builtWheatherIcon(weatherIcon[index])
      const weatherForecastDayHTML = element.querySelector(
        `.weather_forecast--day`
      );
      weatherForecastDayHTML.innerHTML = days[index];
      const weatherForecastDescriptionHTML = element.querySelector(
        `.weather_forecast--type`
      );
      weatherForecastDescriptionHTML.innerHTML = weatherDescription[index];
      const weatherForecastTempHTML = element.querySelector(
        `.weather_forecast--temp`
      );
      weatherForecastTempHTML.innerHTML = `${changeTempUnit(
        weatherTempMin[index]
      )}/${changeTempUnit(weatherTempMax[index])}`;
    });
  }
}
