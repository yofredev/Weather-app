export const getDayForecast = () =>{

    const now = new Date()
    const today = now.getDay()
    const days = []
    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
       'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    
    for(let i = 0 ; i < 4; i++ ){
        const dayNum = (today + i + 1) % 7;
        const day = daysOfWeek[dayNum];
        days.push(day)
   
        
    }
    
    
    return days
}