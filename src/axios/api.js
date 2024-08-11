import axios from "axios";

export async function getLatLon(cityName) {

    if (cityName) {
        const response = axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${cityName}`)
        return (await response).data;
    } else {
        const response = axios.get("https://nominatim.openstreetmap.org/search?format=json&q=bengaluru")
        return (await response).data
    }
    // const response = await fetch("https://nominatim.openstreetmap.org/search?format=json&q=bengaluru");
    // const data = await response.json();
}


export async function getWeather(lon , lat) {
    if(lon==""||lat==""){
        lon=77.62260003796 ;
        lat= 12.98815675
    }
    const wResponse = axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current_weather=true`)
    console.log("jaja", (await wResponse).data)
    const data = (await wResponse).data
    return data;
}