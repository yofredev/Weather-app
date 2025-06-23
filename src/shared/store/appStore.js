//@ts-nocheck
import { getLocation } from "/src/features/location/services/geolotion_api";
import { Weather } from "/src/shared/models/weatherData";
import { parseWeatherFetch } from "../utils/parseWeather";
import { parserOpencafetch } from "/src/features/location/services/parseOpencagedata.ts";
import { getCoordinates } from "../../features/location/services/geocode_api";
import { getWheather } from "../api/wheather_api";
import { parseWeatherForecast } from "../../features/forecast/services/parseWeatherForecast";

export class Store {
  static instance;
  #currentWeather;
  #defaultLocation;
  #location;
  constructor() {
    if (!!Store.instance) {
      return Store.instance;
    }
    Store.instance = this;
    this.#currentWeather = null;
    this.#defaultLocation = {
      city: "London",
      country: "United Kingdom",
      continent: `Europe`,
    };
    this.#location = null;
  }
  get location() {
    return this.#location;
  }
  set setlocation(location) {
    this.#location = location;
  }

  get currentWeather() {
    return this.#currentWeather;
  }
  set currentWeather(value) {
    this.#currentWeather = value;
  }
  async setDefaultWeather() {
    try {
      const location = await getCoordinates(this.#defaultLocation.city);

      const weatherData = await parseWeatherFetch(location.lat, location.lon);
      const weatherForecastData = await parseWeatherForecast(
        location.lat,
        location.lon
      );

      const {
        weatherName,
        weatherType,
        weatherIcon,
        windSpeed,
        temp,
        feelsLikeTemp,
        tempMin,
        tempMax,
      } = weatherData;

      console.log(
        weatherName,
        weatherType,
        weatherIcon,
        windSpeed,
        temp,
        feelsLikeTemp,
        tempMin,
        tempMax
      );
      this.currentWeather = new Weather({
        locationData: this.#defaultLocation,
        weatherName,
        weatherType,
        weatherIcon,
        windSpeed,
        temp,
        feelsLikeTemp,
        tempMin,
        tempMax,
        weatherForecast: weatherForecastData,
      });

      return this.currentWeather;
    } catch (error) {
      console.Error(`error setting default weather`, error);
      throw new Error(`failed to set default weather`);
    }
  }
  async loadWeather() {
    try {
      const [weatherData, opencagedata, weatherForecastData] =
        await Promise.all([
          parseWeatherFetch(this.location.lat, this.location.lon),
          parserOpencafetch(this.location.lat, this.location.lon),
          parseWeatherForecast(this.location.lat, this.location.lon),
        ]);

      const {
        weatherName,
        weatherType,
        weatherIcon,
        windSpeed,
        temp,
        feelsLikeTemp,
        tempMin,
        tempMax,
      } = weatherData;
      this.currentWeather = new Weather({
        locationData: opencagedata,
        weatherName,
        weatherType,
        weatherIcon,
        windSpeed,
        temp,
        feelsLikeTemp,
        tempMin,
        tempMax,
        weatherForecast: weatherForecastData,
      });

      console.log(this.currentWeather);

      return this.currentWeather;
    } catch (error) {
      console.error(`error loading weather`, error);
      throw new Error(`failed to load weather`);
    }
  }
  async locationWeather() {
    try {
      const location = await getLocation();
      const { latitude: lat, longitude: lon } = location;

      this.setlocation = { lat, lon };
      const weather = this.loadWeather();
      return weather;
    } catch (error) {
      console.error(`error loading location weather`, error);
      throw new Error(`failed to load location weather`);
    }
  }

  async initControl() {
    try {
      const result = await navigator.permissions.query({ name: "geolocation" });

      if (result.state === "granted") {
        const weather = await this.locationWeather();
        return weather;
      } else if (result.state === "prompt") {
        const weather = await this.setDefaultWeather();
        return weather;
      } else if (result.state === "denied") {
        console.warn("Permiso denegado");
        const weather = await this.setDefaultWeather();
        console.log(weather);

        return weather;
      }
    } catch (error) {
      console.error(`error init control`, error);
      throw new Error(`failed to init controller`);
    }
  }
}
