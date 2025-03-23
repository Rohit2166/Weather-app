const apikey ="c7d258bfaf289501330e2d1b810e5ad7"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const search=document.querySelector(".search input");
const searchbutton=document.querySelector(".search button");

async function checkweather(city){
    const response =await fetch(apiurl + city +`&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerText=data.name;
    document.querySelector(".temp").innerText=Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerText=data.wind.speed + "km/h";
    document.querySelector(".humidity").innerText=data.main.humidity + "%";

}
searchbutton.addEventListener("click",()=>{
checkweather(search.value);
}) 