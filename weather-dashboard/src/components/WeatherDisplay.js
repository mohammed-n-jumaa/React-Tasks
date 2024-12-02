import React, { useMemo } from 'react';
import { useWeatherContext } from '../context/WeatherContext';

const WeatherDisplay = () => {
  const { weatherData } = useWeatherContext();

  const weatherInfo = useMemo(() => {
    if (!weatherData || !weatherData.weather || weatherData.weather.length === 0) {
      return 'Loading weather data...';
    }

    const { name, weather, main } = weatherData;
    const icon = weather[0]?.icon;
    const description = weather[0]?.description || 'No description';
    const temp = main?.temp;

    return { name, description, icon, temp };
  }, [weatherData]);

  return (
    <div className="weather-info">
      <h3>{weatherInfo ? `${weatherInfo.name} Weather` : ''}</h3>
      <div className="weather-icon">
        {weatherInfo && weatherInfo.icon ? (
          <i className={`fa fa-sun`}></i> // يمكنك تغيير الأيقونة حسب حالة الطقس
        ) : (
          <i className="fa fa-cloud"></i>
        )}
      </div>
      <p>{weatherInfo ? `${weatherInfo.description}, Temp: ${weatherInfo.temp}°C` : ''}</p>
    </div>
  );
};

export default WeatherDisplay;
