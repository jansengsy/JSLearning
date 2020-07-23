const storage = new Storage();
let city = storage.loadCity();

// Sets the default to London
if (city === undefined) city = 'London';
const weather = new Weather(city);

document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('w-change-btn').addEventListener('click', () => {
  city = document.getElementById('city').value;
  weather.changeLocation(city);
  getWeather();
  storage.storeCity(city);
  $('#locModal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then((data) => {
      document.getElementById('w-location').textContent = city;
      document.getElementById('w-desc').textContent = `${data.weatherDesc}`;
      document.getElementById(
        'w-icon'
      ).src = `http://openweathermap.org/img/w/${data.icon}.png`;
      document.getElementById(
        'w-humidity'
      ).textContent = `Humidity: ${data.weather.humidity}`;
      document.getElementById(
        'w-string'
      ).textContent = `Current temperature: ${convertKtoCelsius(
        data.weather.temp
      )}${String.fromCodePoint(8451)}`;
      document.getElementById(
        'w-feels-like'
      ).textContent = `Feels like: ${convertKtoCelsius(
        data.weather.feels_like
      )}${String.fromCodePoint(8451)}`;
      document.getElementById(
        'w-wind-speed'
      ).textContent = `Wind speed: ${data.wind}mph`;
      document.getElementById(
        'w-high'
      ).textContent = `Temperature High: ${convertKtoCelsius(
        data.weather.temp_max
      )}${String.fromCodePoint(8451)}`;
      document.getElementById(
        'w-low'
      ).textContent = `Temperature Low: ${convertKtoCelsius(
        data.weather.temp_min
      )}${String.fromCodePoint(8451)}`;
    })
    .catch((err) => console.log(err));
}

function convertKtoCelsius(temp) {
  const celsius = temp - 273.5;
  return celsius.toFixed(2);
}
