//@ts-nocheck
import { getCoordinates } from "../../location/services/geocode_api";

export function getInputValue(input, callback) {
  input.addEventListener(`keyup`, (event) => {
    if (event.key === `Enter`) {
      let city = event.target.value;

      const encodedCity = encodeURIComponent(city);
      getCoordinates(encodedCity).then((data) => {
        callback(data);
      });
    }
  });
}
