
//@ts-nocheck

export class UI {
    renderWeather(tempC){
        const temp = document.querySelector(`.temp`)
        console.log(tempC)
        temp.innerHTML = tempC

    }
}