
//@ts-nocheck

export class UI {
    renderWeather(tempValue,locationValue){
        const temp = document.querySelector(`.temp`)
        const location = document.querySelector(`.location`)
        temp.innerHTML = tempValue
        location.innerHTML = locationValue

    }
}