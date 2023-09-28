import { getCoordsAPI, getWeatherAPI } from "./api.js";

document.getElementById('searchForm').addEventListener('submit',async function(event) {
    event.preventDefault();

    const searchTerm = document.getElementById('search').value;

    const {lat, lon} = await getCoordsAPI(searchTerm);
    console.log(await getWeatherAPI(lat, lon));

    const data = await getWeatherAPI(lat, lon); 

    var dataApi = document.getElementById("dataApi");
    dataApi.style.display = "block";

    console.log(data.main.temp);

    console.log("https://openweathermap.org/img/wn/" + data.weather[0].icon + "@4x.png");
    document.getElementById('imgWeather').src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@4x.png";
    document.getElementById('numberDegre').innerHTML= Math.round(data.main.temp - 273.15);
    document.getElementById('weather').innerHTML= data.weather[0].description;
    document.getElementById('humidityNumber').innerHTML= data.main.humidity;
    document.getElementById('windSpeed').innerHTML= data.wind.speed;
});