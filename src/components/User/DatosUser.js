import React, { useState } from 'react';
import GraficaHumedad from './GraficaHumedad';
import Termometro from './Termometro';
import GraficaNitrogeno from './GraficaNitrogeno';
import GraficaFosforo from './GraficaFosforo';
import GraficaPotasio from './GraficaPotasio';

const DatosExtras = () => {
  // Estado para almacenar la opción seleccionada del cultivo
  const [cultivoSeleccionado, setCultivoSeleccionado] = useState('');

  // Función para manejar el cambio en la selección del cultivo
  const handleCultivoChange = (event) => {
    setCultivoSeleccionado(event.target.value);
  };

  return (
    <div className='flex flex-col mt-5'>
      <div className="flex items-center mb-4">
        <h2 className='text-lg font-semibold text-xl mr-4'>Cultivo</h2>
        
        {/* Componente de selección múltiple para elegir el cultivo */}
        <select
          value={cultivoSeleccionado}
          onChange={handleCultivoChange}
          className='border border-gray-300 rounded-md p-2 w-40'
        >
          <option value=''>Selecciona un cultivo</option>
          <option value='tomate'>Tomate</option>
          <option value='papa'>Papa</option>
          <option value='cebolla'>Cebolla</option>
          {/* Agrega más opciones según sea necesario */}
        </select>
      </div>

      {/* Renderizar las gráficas según la opción seleccionada */}
      {cultivoSeleccionado && (
        <div className="flex flex-row">

          <div className='flex flex-col bg-white rounded-md shadow-md border border-custom-D9D9D9 border-2 w-60 h-80 mr-4'>
            <h2 className='flex items-center font-semibold text-custom-204E51 text-xl mb-2 mt-2 ml-2'>Humedad</h2>
            <div className='ml-4'>
              <GraficaHumedad humedad={92} />
            </div>
          </div>

          <div className='flex flex-col bg-white rounded-md shadow-md border border-custom-D9D9D9 border-2 w-60 h-80 mr-4'>
            <h3 className='flex items-center font-semibold text-custom-204E51 text-xl mb-2 mt-2 ml-2'>Temperatura</h3>
            <div className='ml-4'>
              <Termometro temperatura={-10} />
            </div>
          </div>

          <div className='flex flex-col bg-white rounded-md shadow-md border border-custom-D9D9D9 border-2 w-7/12 h-80 mr-4'>
            <h3 className='flex items-center font-semibold text-custom-204E51 text-xl mb-2 mt-2 ml-2'>Nutrientes</h3>
            <div className='flex flex-rol ml-4'>
              <GraficaNitrogeno nitrogeno={170} />
              <GraficaFosforo fosforo={50} />
              <GraficaPotasio potasio={180} />
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default DatosExtras;
