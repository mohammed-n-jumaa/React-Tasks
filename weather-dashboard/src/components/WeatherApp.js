import React, { useState, useEffect, useCallback } from 'react';
import { useWeatherContext } from '../context/WeatherContext';
import WeatherDisplay from './WeatherDisplay';

const WeatherApp = () => {
  const [city, setCity] = useState('London');
  const { fetchWeather } = useWeatherContext();

  // التحديث عند تغيير المدينة
  const handleCityChange = useCallback((e) => setCity(e.target.value), []);

  // استخدام hook لجلب البيانات عند تغيير المدينة
  useEffect(() => {
    fetchWeather(city);
  }, [city, fetchWeather]);

  return (
    <div className="container">
      <h2>Weather Dashboard</h2>
      <div className="form-group">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          className="form-control"
          placeholder="Enter city"
        />
      </div>
      <WeatherDisplay />
    </div>
  );
};

export default WeatherApp;
