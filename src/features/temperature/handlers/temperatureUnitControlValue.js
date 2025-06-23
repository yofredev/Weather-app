//@ts-nocheck


export function temperatureUnitControl(select){

    select.addEventListener(`change`,( event )=>{
        data.tempUnit = event.target.value 
        console.log(event.target.value);
        
    })

}