const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&appid=d1ec9825425f7e5c775640a0608faebf';

async function fetchWeatherData() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw new Error('Error fetching weather data:', response.status);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>°F`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;

  const windSpeed = weatherData.wind.speed;
  const windChill = calculateWindChill(weatherData.main.temp, windSpeed);
  document.getElementById('windSpeed').textContent = `${windSpeed} mph`;
  document.getElementById('windChill').textContent = windChill !== null ? `${windChill}°F` : 'N/A';
}

function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 50 && windSpeed >= 3) {
    return Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
  }
  return null;
}

fetchWeatherData();