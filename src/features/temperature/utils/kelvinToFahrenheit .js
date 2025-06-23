//@ts-nocheck

 export const kelvinToFahrenheit = ( tempertureKelvin ) =>{
    const Kelvin = 273.15;
    const Celcius = 9/5;
    const fahrenheitAdjust = 32; 
    const tempertureFahrenheit = Math.floor((tempertureKelvin - Kelvin) * Celcius + fahrenheitAdjust)
    return tempertureFahrenheit
} 