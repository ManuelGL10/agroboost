import React, { useEffect, useState } from "react";
import Clima from "../../img/dom.png";
import DatosUser from './DatosUser'
import ClimateDay from "./ClimateDay";
import WeatherComponent from './WeatherComponent';
import {IconCloud, IconMapPin} from '@tabler/icons-react';
import { useParams } from 'react-router-dom';

const InicioUser = () => {
  const [userData, setUserData] = useState('');
  const { userId } = useParams();
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);

  const [ dispositivos, setDispositivos ] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/dispositivo/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al obtener los datos de los dispositivos');
      }
        return response.json();
    })
    .then(data => setDispositivos(data))
    .catch(error => console.error('Error al obtener los dispositivos:', error));
  }, []);

  console.log(dispositivos)

  useEffect(() => {
    fetch(`http://localhost:4000/user/${userId}`, {
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
    <div className='bg-background ml-[20%] p-4'>
      <WeatherComponent city={city} setTemperature={setTemperature} setDescription={setDescription} setHourlyForecast={setHourlyForecast} /> 
      <div className='mt-20 mb-6 flex flex-row items-center'>
        <div className='bg-white rounded-lg flex items-center justify-between px-8 w-full'>
          <div className='flex items-end'> 
            <p className='text-custom-204E51 text-7xl font-boad'>{temperature !== null ? `${temperature}°C` : 'Cargando...'}</p>
            <div className="text-sm text-gray-600 font-medium flex flex-col ml-4">
              <span>{formattedDate}</span>
              <div className="flex items-center">
                <IconMapPin size={18}/>
                <span>{userData && userData.direccion.ciudad ? userData.direccion.ciudad : 'Cargando...'}, {userData && userData.direccion.estado ? userData.direccion.estado : 'Cargando...'}</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col' >
            <h2 className='flex items-center text-lg font-semibold'>{temperature !== null ? `${temperature}°C` : 'Cargando...'}</h2>
            <div className='flex items-center justify-center'> 
              <p className='text-custom-204E51 text-5xl font-boad'>{description ? description.charAt(0).toUpperCase() + description.slice(1) : 'Cargando...'}</p>
            </div>
          </div>
          <img src={Clima} alt='Clima' className='w-40 h-40 rounded-md'  />
        </div>
      </div>
      <ClimateDay hourlyForecast={hourlyForecast}/>
      <DatosUser datos={dispositivos}/>
    </div>
  );
};

export default InicioUser;