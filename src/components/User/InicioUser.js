import React, { useEffect, useState } from "react";
import Clima from "../../img/lluvia.png";
import DatosUser from './DatosUser'
import ClimateDay from "./ClimateDay";
import WeatherComponent from './WeatherComponent';
import { useParams } from 'react-router-dom';

const InicioUser = () => {
  const [userData, setUserData] = useState('');
  const { userId } = useParams();
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);

  const [ dispositivos, setDispositivos ] = useState([]);

  const fetchDispositivos = () => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    fetch(`${backendUrl}/dispositivo/${userId}`, {
      method: 'GET', 
      headers:{
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if(!response.ok){
          throw new Error('Error al obtener los datos de los dispositivos');
        }
        return response.json();
    })
    .then(data => setDispositivos(data))
    .catch(error => console.error('Error al obtener los dispositivos', error)); 
  }

  useEffect(() => {
    fetchDispositivos();

    const interval = setInterval(() => {
      fetchDispositivos();
    }, 5000); 

    return () => clearInterval(interval);
  }, [userId]); 

  useEffect(() => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    fetch(`${backendUrl}/user/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al obtener los datos del cultivo');
        }
        return response.json();
    })
    .then(data => setUserData(data))
    .catch(error => console.error('Error al obtener los cultivos:', error));
  }, []);

  const city = userData && userData.direccion && userData.direccion.ciudad ? userData.direccion.ciudad : null;


  // Obtener la fecha actual
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('es-ES', options);

  return (
    <div className='bg-background p-4'>
  <WeatherComponent city={city} setTemperature={setTemperature} setDescription={setDescription} setHourlyForecast={setHourlyForecast} />
  
  {/* Diseño para pantallas pequeñas (sm) */}
  <div className='block sm:hidden mt-20 mb-6 items-center'>
    <div className='bg-white rounded-lg px-4 pb-4 pt-6 w-full grid grid-cols-1 text-center'>
      <span className="text-lg mb-6 font-semibold text-gray-600">
        {userData && userData.direccion.ciudad ? userData.direccion.ciudad : 'Cargando...'}, 
        {userData && userData.direccion.estado ? userData.direccion.estado : 'Cargando...'}
      </span>
      <div className="flex flex-col justify-center items-center">
        <img src={Clima} alt='Clima' className='size-20 rounded-md mb-6' />
      </div>
      <p className='text-custom-204E51 text-4xl font-semibold mb-2'>
        {temperature !== null ? `${temperature}°` : 'Cargando...'}
      </p>
      <p className='text-gray-400 text-xl'>
          {description ? description.charAt(0).toUpperCase() + description.slice(1) : 'Cargando...'}
      </p>
    </div>
  </div>

  {/* Diseño para pantallas medianas y grandes (md y lg) */}
  <div className='hidden sm:block mt-20 mb-6 items-center'>
    <div className='bg-white rounded-lg px-4 pb-4 pt-10 w-full grid grid-cols-2'>
      <div>
        <p className='text-custom-204E51 text-8xl font-semibold mb-2'>
          {temperature !== null ? `${temperature}°` : 'Cargando...'}
        </p>
        <span className="text-lg">
          {userData && userData.direccion.ciudad ? userData.direccion.ciudad : 'Cargando...'}, 
          {userData && userData.direccion.estado ? userData.direccion.estado : 'Cargando...'}
        </span>
      </div>
      <div className="flex flex-col justify-end items-end">
        <div className="flex mb-2 items-center">
          <img src={Clima} alt='Clima' className='size-12 rounded-md mr-2' />
          <p className='text-gray-600 text-2xl font-medium'>
            {description ? description.charAt(0).toUpperCase() + description.slice(1) : 'Cargando...'}
          </p>
        </div>
        <span className="text-lg text-right">{formattedDate}</span>
      </div>
    </div>
  </div>

  <ClimateDay hourlyForecast={hourlyForecast} />
  <DatosUser datos={dispositivos} />
</div>
  );
};

export default InicioUser;