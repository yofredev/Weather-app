import { opencagedata } from "../api/opencage_geocoding_api";

export function parserOpencafetch(lat,lon){
    return opencagedata(lat,lon).then( data => {
        const {country,continent,city} = data
        return {country,continent,city}
    })
} 