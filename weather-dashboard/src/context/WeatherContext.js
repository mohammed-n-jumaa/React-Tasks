import React, { createContext, useState, useContext } from 'react';

// إنشاء الـ Context
const WeatherContext = createContext();

// مزود الـ Context
export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d2b5812f2efca3c193245f6fa76f70f9&units=metric`);
      const data = await response.json();
      
      if (data.cod !== 200) {
        setWeatherData(null); // في حال كانت هناك مشكلة مع API
        return;
      }
      
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  return (
    <WeatherContext.Provider value={{ weatherData, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

// hook لاستخدام الـ Context
export const useWeatherContext = () => useContext(WeatherContext);
