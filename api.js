export async function getCoordsAPI(name) {

    const response = await axios.get("http://api.openweathermap.org/geo/1.0/direct?q=" + name + "&appid=f7cf692d475730ba990683a444c7b600");
 
    if (response.status === 200) {
        const data = response.data;
        return {
            lat: data[0].lat,
            lon: data[0].lon
        };
    }
}

export async function getWeatherAPI(lat, lon) {
    const response = await axios.get("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=f7cf692d475730ba990683a444c7b600");
    if (response.status === 200) {
        const data = response.data;
        return data;
    }
}
