import React, { useState, useEffect } from 'react';
import './App.css';

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Leipzig');
  const API_KEY = '3dcce3507bea42b09966a8c246e9ca5c'; // Dein OpenWeatherMap API-Schlüssel

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) {
          throw new Error('Fehler bei der API-Anfrage wegen deiner Bambusleitung');
        }
        const data = await response.json();
        setWeather(data);
        document.body.className = getWeatherClass(data.weather[0].main.toLowerCase());
      } catch (error) {
        console.error('Fehler bei der API-Anfrage:', error, 'wegen deiner Leitung...');
      }
    };

    fetchWeather();
  }, [city]);

  const getWeatherClass = (weatherCondition) => {
    if (!weatherCondition) return 'default';
    if (weatherCondition.includes('rain')) return 'rain-background';
    if (weatherCondition.includes('thunderstorm')) return 'thunderstorm-background';
    if (weatherCondition.includes('clear')) return 'clear-background';
    if (weatherCondition.includes('clouds')) return 'cloudy-background';
    if (weatherCondition.includes('snow')) return 'snow-background';
    return 'default-background';
  };

  return (
    <div className="weather-container">
      <div className="weather-input">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Deine Hood eingeben"
          className="input-field"
        />
      </div>
      {weather && (
        <div className="weather-info">
          <p>Temperatur: <span>{weather.main.temp}°C</span></p>
          <p>Wetter: <span>{weather.weather[0].description}</span></p>
          <p>Luftfeuchtigkeit: <span>{weather.main.humidity}%</span></p>
          <p>Windstärke: <span>{weather.wind.speed} m/s</span></p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
