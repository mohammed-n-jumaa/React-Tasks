import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [temperature, setTemperature] = useState(null);
  const [unit, setUnit] = useState('C');
  const [city, setCity] = useState('London');
  const [inputCity, setInputCity] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');
  const [error, setError] = useState(null); // حالة الخطأ

  // جلب بيانات الطقس من API
  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = 'd2b5812f2efca3c193245f6fa76f70f9';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('City not found'); // في حالة عدم وجود المدينة
        }

        const data = await response.json();
        setTemperature(data.main.temp);
        setWeatherIcon(`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        setError(null); // إعادة تعيين الخطأ إذا كانت البيانات صحيحة
      } catch (error) {
        setError(error.message); // تعيين الخطأ
        setTemperature(null); // مسح درجة الحرارة
        setWeatherIcon(''); // مسح أيقونة الطقس
      }
    };

    fetchWeather();
  }, [city]);

  // تحويل الحرارة إلى فهرنهايت
  const convertToFahrenheit = (tempInCelsius) => (tempInCelsius * 9/5) + 32;

  // تقريب الرقم إلى أقرب عدد صحيح
  const roundedTemperature = temperature ? Math.round(temperature) : null;

  // تغيير المدينة من المدخلات
  const handleCityChange = (e) => {
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    if (inputCity) {
      setCity(inputCity);
      setInputCity('');
    }
  };

  // التبديل بين سيليسيوس وفهرنهايت عند الضغط على درجة الحرارة
  const handleTemperatureClick = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
  };

  return (
    <div className="app-container">
      {/* الفيديو في الخلفية الكاملة */}
      <div className="background-container">
        <video autoPlay loop muted className="background-video">
          <source src="/clouds.mp4" type="video/mp4" />
        </video>
      </div>

      {/* البطاقة في المقدمة */}
      <div className="weather-card">
        <h2>Weather App</h2>
        <div className="input-container">
          <input
            type="text"
            className="input-city"
            placeholder="Enter city"
            value={inputCity}
            onChange={handleCityChange}
          />
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>

        {error ? (
          <div className="error-message">
            <p>{error}</p>
          </div>
        ) : temperature !== null ? (
          <div className="weather-info">
            {/* عرض اسم المدينة فوق درجة الحرارة */}
            <p className="city-name">{city}</p>

            {/* عرض الأيقونة ودرجة الحرارة */}
            <div className="weather-details">
              <img src={weatherIcon} alt="weather-icon" className="weather-icon" />
              <h3 onClick={handleTemperatureClick}>
                {unit === 'C' ? roundedTemperature : Math.round(convertToFahrenheit(roundedTemperature))}° {unit}
              </h3>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default App;
