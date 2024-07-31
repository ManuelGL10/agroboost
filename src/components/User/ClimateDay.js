import React from "react";
import { IconCloud, IconSun, IconCloudRain, IconSnowflake, IconWind, IconCloudStorm} from '@tabler/icons-react';

const iconMap = {
    "clear sky": <IconSun size={34} />,
    "few clouds": <IconCloud size={34} />,
    "scattered clouds": <IconCloud size={34} />,
    "broken clouds": <IconCloud size={34} />,
    "shower rain": <IconCloudRain size={34} />,
    "rain": <IconCloudRain size={34} />,
    "thunderstorm": <IconCloudStorm size={34} />,
    "snow": <IconSnowflake size={34} />,
    "mist": <IconWind size={34} />,
    "cielo claro": <IconSun size={34} />,
    "algo de nubes": <IconCloud size={34} />,
    "nubes dispersas": <IconCloud size={34} />,
    "nubes rotas": <IconCloud size={34} />,
    "lluvia ligera": <IconCloudRain size={34} />,
    "lluvia": <IconCloudRain size={34} />,
    "tormenta": <IconCloudStorm size={34} />,
    "nieve": <IconSnowflake size={34} />,
    "neblina": <IconWind size={34} />
};

const ClimateDay = ({ hourlyForecast }) => {
    const currentTime = new Date().getTime() / 1000

    const nextHour = Math.ceil(currentTime / 3600) * 3600;


    const futureForecast = hourlyForecast.filter(hour => hour.dt >= nextHour).slice(0, 12);

    return (
        <div className='mt-2 flex flex-row items-center'>
            <div className='bg-white rounded-lg border-custom-D9D9D9 border-2 flex items-center w-full h-32 overflow-x-auto'>
                {futureForecast.map((hour, index) => (
                    <div key={index} className="bg-custom-F0F0F0 rounded-xl p-2 ml-4 mr-4 mt-2 mb-2 w-20">
                        <div className='flex flex-col'>
                            <div>
                                <h2 className='flex items-center justify-center font-semibold'>{new Date(hour.dt * 1000).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</h2>
                                <div className='flex items-center justify-center'>
                                    {iconMap[hour.weather[0].description] || <IconCloud size={34} />}
                                </div>
                                <div className='flex items-center justify-center'>
                                    <p className='text-gray-600'>{Math.round(hour.main.temp)}°C</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClimateDay;
