import React, { useState } from 'react';
import GraficaHumedad from './GraficaHumedad';
import Termometro from './Termometro';
import GraficaNitrogeno from './GraficaNitrogeno';
import GraficaFosforo from './GraficaFosforo';
import GraficaPotasio from './GraficaPotasio';
import HumidityDoughnutChart from '../graphics/HumidityDoughtnutChar';
import TemperatureLineChart from '../graphics/TemperatureBarChart';
import NitrogenoDoughnutChart from '../graphics/NitrogenoDoughnutChart';
import FosforoDoughnutChart from '../graphics/FosforoDoughnutChart';
import PotasioDoughnutChart from '../graphics/PotasioDoughnutChart';

const DatosExtras = () => {
  // Estado para almacenar la opción seleccionada del cultivo
  const [cultivoSeleccionado, setCultivoSeleccionado] = useState('');

  // Función para manejar el cambio en la selección del cultivo
  const handleCultivoChange = (event) => {
    setCultivoSeleccionado(event.target.value);
  };

  return (
    <div className='flex flex-col mt-5'>
      <div className='my-4'>
        <h1 className='text-2xl font-semibold'>Cultivos</h1>
        <div className='grid grid-cols-1'>
          <div className='my-2 bg-white p-4 rounded-xl'>
            <h1 className='text-xl font-medium'>Cultivo: Maíz</h1>
            <div className='grid grid-cols-2 gap-x-2'>
              <div className='grid grid-cols-2 gap-x-2'>
                <div className='p-2 border-2 border-gray-300 rounded-lg'>
                  <span className='text-xl font-medium text-custom-264948'>Temperatura</span>
                  <TemperatureLineChart/>
                </div>
                <div className='p-2 border-2 border-gray-300 rounded-lg'>
                  <span className='text-xl font-medium text-custom-264948'>Humedad</span>
                  <HumidityDoughnutChart/>
                </div>
              </div>
              <div className='p-2 border-2 border-gray-300 rounded-lg'>
                <span className='text-xl font-medium text-custom-264948'>Nutrientes</span>
                <div className='grid grid-cols-3 gap-x-2 mt-2'>
                  <div className='text-center'>
                    <NitrogenoDoughnutChart/>
                    <span className='text-yellow-500 font-medium'>Nitrógeno</span>
                  </div>
                  <div className='text-center'>
                    <FosforoDoughnutChart/>
                    <span className='text-green-600 font-medium'>Fósforo</span>
                  </div>
                  <div className='text-center'>
                    <PotasioDoughnutChart/>
                    <span className='text-orange-500 font-medium'>Potasio</span>
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
