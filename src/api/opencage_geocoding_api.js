


export const opencagedata = (lat,lon) => {
    const API_KEY = `87c07524f734432986b5c80bb5ff8ec5`;
    const endPoint = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${API_KEY}&language=es`;

    
    
    return fetch(endPoint).then(response =>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error(`status:${response.status}`)
        }
    }).then(
        data=> {
            const comp =data.results[0].components
            
            return {country:comp.country,city:comp.city,continent:comp.continent}

        }
    )

}