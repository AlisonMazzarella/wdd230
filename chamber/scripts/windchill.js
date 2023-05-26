// temperature and wind speed
const temperature = parseFloat(document.getElementById('temperature').textContent);
const windSpeed = parseFloat(document.getElementById('windSpeed').textContent);

// Check value limits
if (temperature <= 50 && windSpeed > 3.0) {
  // wind chill 
  const windChill = calculateWindChill(temperature, windSpeed);
  document.getElementById('windChill').textContent = windChill.toFixed(2) + ' °F';
} else {
  // display "N/A"
  document.getElementById('windChill').textContent = 'N/A';
}

// calculate wind chill
function calculateWindChill(temperature, windSpeed) {
  const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
  return windChill;
}
