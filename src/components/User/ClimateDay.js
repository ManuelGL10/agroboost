import React from "react";
import soleado from '../../img/soleado.png'
import nube from '../../img/nublado.png'
import lluvia from '../../img/lluvia_hour.png'
import tormenta from '../../img/tormenta_hour.png'
import dianublado from'../../img/dia_nublado.png'
import nieve from '../../img/nevando_hour.png'

const iconMap = {
    "clear sky": <img src={soleado} className="size-8" alt="soleado"/>,
    "few clouds": <img src={nube} className="size-8" alt="nube"/>,
    "clouds": <img src={nube} className="size-8" alt="nube"/>,
    "scattered clouds": <img src={nube} className="size-8" alt="nube"/>,
    "broken clouds": <img src={nube} className="size-8" alt="nube"/>,
    "shower rain": <img src={lluvia} className="size-8" alt="lluvia"/>,
    "rain": <img src={lluvia} className="size-8" alt="lluvia"/>,
    "thunderstorm": <img src={tormenta} className="size-8" alt="tormenta"/>,
    "snow": <img src={nieve} className="size-8" alt="nieve"/>,
    "mist": <img src={dianublado} className="size-8" alt="dianublado"/>,
    "cielo claro": <img src={soleado} className="size-8" alt="soleado"/>,
    "algo de nubes": <img src={nube} className="size-8" alt="nube"/>,
    "nubes dispersas": <img src={nube} className="size-8" alt="nube"/>,
    "nubes rotas": <img src={nube} className="size-8" alt="nube"/>,
    "lluvia ligera": <img src={lluvia} className="size-8" alt="lluvia"/>,
    "lluvia": <img src={lluvia} className="size-8" alt="lluvia"/>,
    "tormenta": <img src={tormenta} className="size-8" alt="tormenta"/>,
    "nieve": <img src={nieve} className="size-8" alt="nieve"/>,
    "neblina": <img src={dianublado} className="size-8" alt="dianublado"/>,
    "nubes": <img src={nube} className="size-8" alt="nube"/>,
};

const ClimateDay = ({ hourlyForecast }) => {
    const currentTime = new Date().getTime() / 1000

    const nextHour = Math.ceil(currentTime / 3600) * 3600;


    const futureForecast = hourlyForecast.filter(hour => hour.dt >= nextHour).slice(0, 24);

    return (
        <div className='mt-2 flex flex-row items-center'>
            <div className='bg-white rounded-lg  flex items-center w-width-full py-4 px-2 overflow-x-auto no-scrollbar'>
                {futureForecast.map((hour, index) => (
                    <div key={index} className="bg-zinc-100 rounded-md p-2 mx-2">
                        <div className='flex flex-col'>
                            <div>
                                <h2 className='flex items-center justify-center font-semibold'>{new Date(hour.dt * 1000).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</h2>
                                <div className='flex items-center justify-center'>
                                    {iconMap[hour.weather[0].description] || <img src={nube} className="size-8" alt="nube"/>}
                                </div>
                                <div className='flex items-center justify-center'>
                                    <p className='text-gray-600'>{Math.round(hour.main.temp)}°</p>
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