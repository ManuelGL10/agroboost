import React, { useState } from 'react';
import HumidityDoughnutChart from '../graphics/HumidityDoughtnutChar';
import TemperatureLineChart from '../graphics/TemperatureBarChart';
import NitrogenoDoughnutChart from '../graphics/NitrogenoDoughnutChart';
import FosforoDoughnutChart from '../graphics/FosforoDoughnutChart';
import PotasioDoughnutChart from '../graphics/PotasioDoughnutChart';
import { useParams } from 'react-router-dom';

const DatosExtras = ({datos}) => {
  // Estado para almacenar la opción seleccionada del cultivo
  const [cultivoSeleccionado, setCultivoSeleccionado] = useState('');
  const { userId } = useParams();

  // Función para manejar el cambio en la selección del cultivo
  const handleCultivoChange = (event) => {
    setCultivoSeleccionado(event.target.value);
  };

// Filtrar los datos por tipo de dispositivo
  const temperaturaData = datos.find(dispositivo => dispositivo.nombre_dispositivo === 'Sensor de Temperatura');
  const humedadData = datos.find(dispositivo => dispositivo.nombre_dispositivo === 'Sensor de Humedad');
  const nutrientesData = datos.find(dispositivo => dispositivo.nombre_dispositivo === 'Sensor de Nutrientes');

// Función para obtener el último valor de un conjunto de datos
const obtenerUltimoDato = (data) => {
  if (data && data.datos && data.datos.length > 0) {
    return data.datos[data.datos.length - 1];
  }
  return null;
};

const obtenerUltimoElementoArray = (array) => {
  if (array && array.length > 0){
    return array [array.length - 1]; 
  }
}

// Obtener los últimos valores de temperatura, humedad y nutrientes
const ultimaTemperatura = obtenerUltimoDato(temperaturaData);
const ultimaHumedad = obtenerUltimoDato(humedadData);
const ultimoNitrogeno = obtenerUltimoElementoArray(nutrientesData?.datos?.nitrogeno); 
const ultimoFosforo = obtenerUltimoElementoArray(nutrientesData?.datos.fosforo); 
const ultimoPotasio = obtenerUltimoElementoArray(nutrientesData?.datos?.potasio);


return (
  <div className='flex flex-col mt-5'>
    <div className='my-4'>
      <h1 className='text-2xl font-semibold'>Cultivos</h1>
      <div className='grid grid-cols-1'>
        <div className='my-2 bg-white p-4 rounded-xl'>
          <h1 className='text-xl font-medium mb-4'>Cultivo: Maíz</h1>
          <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='p-2 border-2 border-gray-300 rounded-lg'>
                <span className='text-xl font-medium text-custom-264948'>Temperatura</span>
                <TemperatureLineChart datos={[ultimaTemperatura]}/>
              </div>
              <div className='p-2 border-2 border-gray-300 rounded-lg'>
                <span className='text-xl font-medium text-custom-264948'>Humedad</span>
                <HumidityDoughnutChart datos={[ultimaHumedad]}/>
                <div className='flex items-center justify-center font-medium lg:text-lg md:text-lg text-gray-500'>
                  <span>Humedad al {ultimaHumedad}%</span>
                </div>
              </div>
            </div>
            <div className='p-2 border-2 border-gray-300 rounded-lg'>
              <span className='text-xl font-medium text-custom-264948'>Nutrientes</span>
              <div className='grid grid-cols-3 gap-x-2 mt-2'>
                <div className='text-center'>
                  <NitrogenoDoughnutChart datos={[ultimoNitrogeno]}/>
                  <span className='text-yellow-500 font-medium lg:text-lg md:lg:text-lg md:text-lg'>Nitrógeno</span>
                  <div className='text-yellow-500 flex items-center justify-center'>
                    <span className='lg:text-base md:text-base text-sm'>{ultimoNitrogeno} ppm</span>
                  </div>
                </div>
                <div className='text-center'>
                  <FosforoDoughnutChart datos={[ultimoFosforo]}/>
                  <span className='text-green-600 font-medium lg:text-lg md:text-lg'>Fósforo</span>
                  <div className='text-green-600 flex items-center justify-center'>
                    <span className='lg:text-base md:text-base text-sm'>{ultimoFosforo} ppm</span>
                  </div>
                </div>
                <div className='text-center'>
                  <PotasioDoughnutChart datos={[ultimoPotasio]}/>
                  <span className='text-orange-500 font-medium lg:text-lg md:text-lg'>Potasio</span>
                  <div className='text-orange-500 flex items-center justify-center'>
                    <span className='lg:text-base md:text-base text-sm'>{ultimoPotasio} ppm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default DatosExtras;
