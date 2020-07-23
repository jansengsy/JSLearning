class Weather {
  constructor(city) {
    this.api_key = '13243f4e24a4759c1cfa71555bc857a1';
    this.city = city;
  }

  async getWeather() {
    const weatherResponse = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.api_key}`
    );
    const weatherData = await weatherResponse.json();

    return {
      weather: weatherData.main,
      wind: weatherData.wind.speed,
      weatherDesc: `${weatherData.weather[0].main}: ${weatherData.weather[0].description}`,
      icon: weatherData.weather[0].icon,
    };
  }

  changeLocation(city) {
    this.city = city;
  }
}
