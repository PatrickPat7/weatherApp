import React, { useState, useEffect } from 'react';
import './App.css'; 

const WeatherApp = () => {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState('Leipzig');
    const API_KEY = '3dcce3507bea42b09966a8c246e9ca5c'; // OpenWeatherMap API-Schlüssel

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) {
          throw new Error('Fehler bei deiner Bambusleitung');
        }
        const data = await response.json(); // in einen json Objekt umwandeln
        setWeather(data); // speichern der Daten
    } catch (error) {
        console.error('Wegen deiner Leitung, Fehler bei API-Anfrage:', error, ' Checkste den Fehler?');
    }
};

fetchWeather(); // Wetterdaten holen
}, [city]); // Wiederholt sich bei Änderung der City

return (
    <div className="weather-container">
      <div className="weather-input">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)} // Aktualisiert die Stadt
          placeholder="Dein Kaff eingeben"
          className="input-field"
        />
      </div>
      {weather && (
        <div className="weather-info">
          <p>Temperatur: {weather.main.temp}°C</p>
          <p>Wetter: {weather.weather[0].description}</p>
          </div>
      )}
    </div>
  );
};
export default WeatherApp;