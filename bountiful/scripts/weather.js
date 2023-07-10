const currentTemp = document.querySelector('#current-temp');
const condition = document.querySelector('#condition');
const humidity = document.querySelector('#humidity');
const forecastItems = document.querySelectorAll('.forecast-item');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad,us&units=imperial&appid=d1ec9825425f7e5c775640a0608faebf';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad,us&units=imperial&appid=d1ec9825425f7e5c775640a0608faebf';

async function fetchWeatherData() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayCurrentWeather(data);
    } else {
      throw new Error('Error fetching weather data:', response.status);
    }
  } catch (error) {
    console.log(error);
  }
}

async function fetchForecastData() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    } else {
      throw new Error('Error fetching forecast data:', response.status);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayCurrentWeather(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>°F`;
  condition.textContent = weatherData.weather[0].description;
  humidity.textContent = `${weatherData.main.humidity}%`;
}

function displayForecast(forecastData) {
  const forecastList = forecastData.list.slice(0, 3);
  forecastItems.forEach((forecastItem, index) => {
    const forecastDay = forecastItem.querySelector('.day');
    const forecastTemp = forecastItem.querySelector('.temp');
    const forecast = forecastList[index];
    const forecastDateTime = new Date(forecast.dt * 1000);
    const forecastIcon = forecast.weather[0].icon;

    forecastDay.textContent = getDayOfWeek(forecastDateTime, index);
    forecastTemp.textContent = `${forecast.main.temp.toFixed(0)}°F`;
    forecastItem.querySelector('.weather-icon').setAttribute('src', `https://openweathermap.org/img/w/${forecastIcon}.png`);
    forecastItem.querySelector('.weather-icon').setAttribute('alt', forecast.weather[0].description);
  });
}

function getDayOfWeek(date, index) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayIndex = (date.getDay() + index) % 7;
  return days[dayIndex];
}

fetchWeatherData();
fetchForecastData();
