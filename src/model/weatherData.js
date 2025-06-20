//@ts-nocheck
export class Weather{
    constructor({locationData,weatherName,weatherType,weatherIcon,temp,tempMax,tempMin,feelsLikeTemp,windSpeed,weatherForecast}){
        this._locationData = locationData;
        this._weatherName = weatherName;
        this._weatherType = weatherType;
        this._weatherIcon = weatherIcon;
        this._tempK = temp;
        this._tempMaxK = tempMax;
        this._tempMinK = tempMin;
        this._feelsLikeTempK = feelsLikeTemp;
        this._windSpeed = windSpeed;
        this._weatherForecast = weatherForecast;
    }  
    get tempC(){
        return Math.floor(this._tempK - 273.15)
    }
   
    get tempMaxC(){
        return Math.floor(this._tempMaxK - 273.15)
    }
    
    get tempMinC(){
        return Math.floor(this._tempMinK - 273.15)
    }
   
    get feelsLikeTempC(){
        return Math.floor(this._feelsLikeTempK - 273.15)
    }        
    }






