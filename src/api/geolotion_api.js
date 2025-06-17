//@ts-nocheck
export const getLocation = async () => {
    
        if(!navigator.geolocation){
            
                new Error("Geolocation is not supported by your browser")
        }
        const position = await new Promise((resolve,reject)=>{
            navigator.geolocation.getCurrentPosition(resolve,reject)
        })
            const {latitude,longitude} = position.coords
            return {latitude,longitude}
      
}
