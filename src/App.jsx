import React from 'react';
import WeatherApp from './WeatherApp';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>WetterPat</h1>
      </header>
      <WeatherApp />
    </div>
  );
}

export default App;