import { getCoordsAPI, getWeatherAPI } from "./api.js";

document.getElementById('searchForm').addEventListener('submit',async function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire par défaut

    const searchTerm = document.getElementById('search').value;

    const {lat, lon} = await getCoordsAPI(searchTerm);
    console.log(await getWeatherAPI(lat, lon));
});
