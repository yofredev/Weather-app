//@ts-nocheck

export function TemperatureUnitControl(select,callback){

    select.addEventListener(`change`,( event )=>{
        data.tempUnit = event.target.value 
        console.log(data.tempUnit);
        
    })

}