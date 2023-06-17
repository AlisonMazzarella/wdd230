const apiKey = 'd1ec9825425f7e5c775640a0608faebf';
const location = 'Peachtree City, GA';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

async function fetchWeatherData() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      updateWeatherContent(data);
    } catch (error) {
      console.log('Error fetching weather data:', error);
    }
}

function updateWeatherContent(data) {
    document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    document.getElementById('weatherCondition').textContent = data.weather[0].main;
    document.getElementById('windSpeed').textContent = data.wind.speed + ' mph';
    document.getElementById('temperature').textContent = data.main.temp;

const windChill = calculateWindChill(data.main.temp, data.wind.speed);
document.getElementById('windChill').textContent = windChill !== null ? windChill + '°F' : 'N/A';
}

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed >= 3) {
      return Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
    }
    return null; 
}

window.addEventListener('load', fetchWeatherData);