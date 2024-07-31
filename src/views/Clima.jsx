import React, { useState } from 'react';
import WeatherComponent from '../components/WeatherComponent';

function Clima() {
    const city = "";  // Cambia a la ciudad que desees
    const [temperature, setTemperature] = useState(null);
    const [description, setDescription] = useState(null);

    return (
        <div className="Clima container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Consulta del Clima</h1>
            <WeatherComponent 
                city={city} 
                onTemperatureChange={setTemperature} 
                onDescriptionChange={setDescription} 
            />
            <div className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
                <h2 className="text-xl font-bold">Detalles del Clima</h2>
                {city}
                {temperature !== null && <p> {temperature}°C</p>}
                {description && <p>Descripción: {description}</p>}
            </div>
        </div>
    );
}

export default Clima;
