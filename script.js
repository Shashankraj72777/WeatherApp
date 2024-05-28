const apiKey = '6d13f403efmsh9d63efb1134e8f4p199d7djsn97262ba48099';
const apiHost = 'weather-by-api-ninjas.p.rapidapi.com';

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': apiHost
    }
};

async function fetchWeather(city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    document.getElementById('cityName').innerHTML = city;

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        const {
            cloud_pct,
            temp,
            feels_like,
            humidity,
            min_temp,
            max_temp,
            wind_speed,
            sunrise,
            sunset
        } = result;

        document.getElementById('cloud_pct').innerHTML = cloud_pct;
        document.getElementById('temp').innerHTML = temp;
        document.getElementById('feels_like').innerHTML = feels_like;
        document.getElementById('humidity').innerHTML = humidity;
        document.getElementById('min_temp').innerHTML = min_temp;
        document.getElementById('max_temp').innerHTML = max_temp;
        document.getElementById('wind_speed').innerHTML = wind_speed;
        document.getElementById('sunrise').innerHTML = sunrise;
        document.getElementById('sunset').innerHTML = sunset;
    } catch (error) {
        console.error(error);
    }
}

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    fetchWeather(city);
});

// Cities for "Weather of other places" section
const cities = ['Shanghai', 'Madrid', 'Abu Dhabi', 'Bangkok', 'Melbourne', 'Auckland'];

async function fetchCityWeather(city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        const {
            cloud_pct,
            temp,
            feels_like,
            humidity,
            min_temp,
            max_temp,
            wind_speed,
            sunrise,
            sunset
        } = result;

        document.getElementById(`${city.toLowerCase().replace(' ', '_')}_cloud_pct`).innerHTML = cloud_pct;
        document.getElementById(`${city.toLowerCase().replace(' ', '_')}_temp`).innerHTML = temp;
        document.getElementById(`${city.toLowerCase().replace(' ', '_')}_feels_like`).innerHTML = feels_like;
        document.getElementById(`${city.toLowerCase().replace(' ', '_')}_humidity`).innerHTML = humidity;
        document.getElementById(`${city.toLowerCase().replace(' ', '_')}_min_temp`).innerHTML = min_temp;
        document.getElementById(`${city.toLowerCase().replace(' ', '_')}_max_temp`).innerHTML = max_temp;
        document.getElementById(`${city.toLowerCase().replace(' ', '_')}_wind_speed`).innerHTML = wind_speed;
        document.getElementById(`${city.toLowerCase().replace(' ', '_')}_sunrise`).innerHTML = sunrise;
        document.getElementById(`${city.toLowerCase().replace(' ', '_')}_sunset`).innerHTML = sunset;
    } catch (error) {
        console.error(`Error fetching weather data for ${city}:`, error);
    }
}

// Fetch weather data for all cities in "Weather of other places" section
cities.forEach(city => fetchCityWeather(city));
