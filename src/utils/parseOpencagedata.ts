//@ts-nocheck

import { opencagedata } from "../api/opencage_geocoding_api";

export function parserOpencafetch(lat:number,lon:number):Promise<{country:string,continent:string,city:string}>{
    return opencagedata(lat,lon).then( data => {
        const {country,continent,city} = data
        return {country,continent,city}
    })
} 