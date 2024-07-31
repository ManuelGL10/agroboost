const API_KEY = 'fb57a922ad32fd172bd88e28f8951baa';

export async function getWeatherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=es`);
    if (!response.ok) {
        throw new Error('Error al obtener los datos del clima');    
    }
    return response.json();
}

export async function getHourlyForecast(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}&lang=es`);
    if (!response.ok) {
        throw new Error('Error al obtener el pronóstico por horas');
    }
    return response.json();
}
