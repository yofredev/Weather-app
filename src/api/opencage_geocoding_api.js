//@ts-nocheck
export const opencagedata = async (lat,lon) => {
    try{const API_KEY = `87c07524f734432986b5c80bb5ff8ec5`;
    const endPoint = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${API_KEY}&language=es`;
    
    const response = await fetch(endPoint)
    const locationData = await response.json()
   
            const locationDataComponents =locationData.results[0].components
            return {country:locationDataComponents.country,
                    city:locationDataComponents.city,
                    continent:locationDataComponents.continent}
                }catch(error){
                    console.error(`failed to load location data componets`,error)
                }

}