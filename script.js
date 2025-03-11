const apiKey="f1d12a8456d3a050a59e10921362bd64"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBoxEl= document.querySelector(".searchbar input")
const searchBtnEl= document.querySelector(".searchbar button")
let weatherEl= document.querySelector("#weatherimg")
async function weatherCheck(city){
   
    
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json()
    if(response.status == 404) {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";

    document.querySelector(".city").innerHTML = data.name 
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed +"Km/h"
 switch(data.weather[0].main){
    case "Clouds":
        weatherEl.innerHTML=`<i class="fa-solid fa-cloud-sun"></i>`;
        break;
    case "Clear": 
        weatherEl.innerHTML=`<i class="fa-solid fa-sun"></i>`;
        break;
    case "Drizzle":
        weatherEl.innerHTML=`<i class="fa-solid fa-cloud-sun-rain"></i>`;
        break;
    case "Rain":
        weatherEl.innerHTML=`<i class="fa-solid fa-cloud-rain"></i>`;
        break;
    case "Mist":
        weatherEl.innerHTML=`<i class="fa-solid fa-cloud"></i>`;
        break;
    case "Snow":
        weatherEl.innerHTML=`<i class="fa-solid fa-snowflake"></i>`
        break;
 }
 }
}
searchBtnEl.addEventListener("click",()=>{
    weatherCheck(searchBoxEl.value)
})