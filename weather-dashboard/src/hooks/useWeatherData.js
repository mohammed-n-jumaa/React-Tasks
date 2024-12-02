import { useEffect } from 'react';
import { useWeatherContext } from '../context/WeatherContext';

const useWeatherData = (city) => {
  const { fetchWeather } = useWeatherContext();

  useEffect(() => {
    fetchWeather(city);
  }, [city, fetchWeather]);

  return null;
};

export default useWeatherData;
