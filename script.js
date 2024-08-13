import { apiKey, apiUrl, searchBox, searchBtn } from "./components/Constants.js";

async function checkWeather(city) {
    const response = await fetch(apiUrl + `${city}&appid=${apiKey}`);
    let data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);

})
