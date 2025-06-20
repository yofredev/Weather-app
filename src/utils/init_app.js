//@ts-nocheck

export function initApp(){
    const app = document.querySelector('#app')

    const HTMLapp =`
    <input type="checkbox" id="config-menu" class="peer hidden">
    <nav class="h-screen w-[80vw] top-0 -right-[80vw] px-5 py-10 transition-right duration-800 ease-in-out peer-checked:right-0 bg-amber-200 absolute rounded-l-3xl">
      <label class="absolute top-2 -left-10" for="config-menu"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      </label>
      <input type="checkbox" id="search-input" class="peer hidden">
      <label for="search-input"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</label>
      <input id="search_input" class="w-full mt-5 mb-3 bg-white rounded-full px-2 py-1 z-20 border opacity-0 peer-checked:opacity-100" type="text" placeholder="Search">
      <label for="select_unit">Temp Unit</label>
      <select id="select_unit" class="temp_unit-select border rounded-md bg-white">
        <option value="celcius">Celcius C°</option>
        <option value="fahrenheit">Fahrenheit F°</option>
        <option value="kelvin">Kelvin K°</option>
      </select>
    </nav>
     <main class="h-screen px-5 py-5 flex flex-col items-center justify-between ">
      
      <section class="flex flex-col items-center px-4 w-full rounded-2xl">
          <span class="location py-10">London, United Kingdom</span>
          <h1 class="temp  text-9xl">loading..</h1>
          <span>max 14/min 10</span>
          <span class="pb-5">feels like 10</span>
      </section>
      <section class="w-full h-40 flex items-center gap-10  overflow-auto bg-slate-400 rounded-2xl">
        <div class="weather_forecast1 w-50 h-30 shrink-0 bg-amber-300 flex flex-col items-center">
          <spam class="">Today</spam>
          <spam class="weather_forecast--temp1"></spam>
          <spam class="weather_forecast--type1"></spam>  
        </div>
         <div class="weather_forecast  w-50 h-30 shrink-0 bg-amber-300 flex flex-col  items-center">
          <spam class="">tomorrow</spam>
          <spam class="weather_forecast--temp"></spam>
          <spam class="weather_forecast--type"></spam>  
        </div>
         <div class="weather_forecast w-50 h-30 shrink-0 bg-amber-300 flex flex-col items-center">
          <spam class="">1</spam>
          <spam class="weather_forecast--temp"></spam>
          <spam class="weather_forecast--type"></spam>  
        </div>
         <div class="weather_forecast w-50 h-30 shrink-0 bg-amber-300 flex flex-col items-center">
          <spam class="">2</spam>
          <spam class="weather_forecast--temp"></spam>
          <spam class="weather_forecast--type"></spam>  
        </div>
         <div class="weather_forecast w-50 h-30 shrink-0 bg-amber-300 flex flex-col items-center">
          <spam class="">3</spam>
          <spam class="weather_forecast--temp"></spam>
          <spam class="weather_forecast--type"></spam>  
        </div>
      </section>
     </main>`
    app.innerHTML = HTMLapp;
}