//@ts-nocheck

export const scrollMouseMove = () =>{
    const swiper = document.querySelector(`.swiper`)
    
    let isDragging = false

    const startDragging = () =>{
        isDragging = true    
        swiper.classList.add(`dragging`)
       
        
    }
    const endDragging = () =>{
        isDragging = false    
         swiper.classList.remove(`dragging`)
    }

    const dragging = (e) =>{
       if(!isDragging) return
        swiper.scrollLeft = e.pageX
 
        
    
        
    }
    
    swiper.addEventListener( `pointerdown`, startDragging)
    document.addEventListener( `pointermove` ,dragging)
    document.addEventListener(`pointerup`,endDragging)
}