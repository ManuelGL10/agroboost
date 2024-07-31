import React, { useState, useEffect } from 'react';
import { getWeatherData, getHourlyForecast } from './WeatherService';

const WeatherComponent = ({ city, setTemperature, setDescription, setHourlyForecast }) => {
    const [intervalId, setIntervalId] = useState(null);

    const fetchWeatherData = async () => {
        if (!city) return;

        try {
            const data = await getWeatherData(city);
            const forecastData = await getHourlyForecast(city);

            setTemperature(data.main.temp);
            setDescription(data.weather[0].description);
            setHourlyForecast(forecastData.list);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    useEffect(() => {
        fetchWeatherData();

        if (intervalId) {
            clearInterval(intervalId);
        }

        const id = setInterval(fetchWeatherData, 60000);
        setIntervalId(id);

        return () => clearInterval(id);
    }, [city]);

    return null;
};

export default WeatherComponent;
